const axios = require("axios");
const qs = require("qs");
let data = qs.stringify({
  grant_type: "client_credentials",
  client_id: process.env.SPOTIFY_CLIENT_ID,
  client_secret: process.env.SPOTIFY_CLIENT_SECRET,
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://accounts.spotify.com/api/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

axios
  .request(config)
  .then((response: any) => {
    process.env.SPOTIFY_CLIENT_ID = response.data.token;
  })
  .catch((error: any) => {
    console.log(error);
  });
