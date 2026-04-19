import profile from '@/data/profile.json'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed, please use GET'});
  }

  try {
    return profile.about;
  } catch (error) {
    console.error('Error fetching about information:', error);
    res.status(500).json({ error: 'An internal server error occured' });
  }
}
