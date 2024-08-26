import api from '@/lib/api.js';

export default async function handler(req:any, res:any) {
  try {
    const response = await api.get('/browse/featured-playlists');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
