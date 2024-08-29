import NextAuth, { CallbacksOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { scopes, spotifyApi } from "@/config/spotify";
import { ExtendedToken, TokenError } from "@/types";

const refreshAccessToken = async (
  token: ExtendedToken,
): Promise<ExtendedToken> => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      refreshToken: refreshedToken.refresh_token || token.refreshToken,
      accessTokenExpiresAt: Date.now() + refreshedToken.expires_in * 1000,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: TokenError.RefreshAccessTokenError,
    };
  }
};


const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: scopes,
        },
      },
    }),
  ],
  callbacks: {
    // jwt: jwtCallback,
    jwt: async function ({
      token,
      user,
      account,
    }: {
      token: any;
      user: any;
      account: any;
    }) {
      let extendedToken: ExtendedToken;

      //User login the first time
      if (account && user) {
        extendedToken = {
          ...token,
          user,
          accessToken: account.access_token as string,
          refreshToken: account.refresh_token as string,
          accessTokenExpiresAt: (account.expires_at as number) * 1000,
        };
        return extendedToken;
      }

      //Subsequent request to check auth sessions
      if (Date.now() + 5000 < (token as ExtendedToken).accessTokenExpiresAt) {
        console.log(
          "ACCESS TOKEN STILL VALID, RETURNING EXTENDED TOKEN",
          token,
        );
        return token;
      }
      //Access token has expired, refresh it
      console.log("ACCESS TOKEN EXPIRED, REFRESHING....");
      return await refreshAccessToken(token as ExtendedToken);
    },
    session: async function ({ session, token }: { session: any; token: any }) {
      session.access_token = (token as ExtendedToken).accessToken;
      session.error = (token as ExtendedToken).error;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
