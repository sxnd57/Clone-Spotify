import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.SPOTIFY_API_TOKEN}`
  }
});

export default api;
