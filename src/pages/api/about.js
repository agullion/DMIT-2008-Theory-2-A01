export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed, please use GET'});
  }

  try {
    const about = await fetch('@/data/profile.json');
    const data = await about.json();
    return data.about;
  } catch (error) {
    console.error('Error fetching about information:', error);
    res.status(500).json({ error: 'An internal server error occured' });
  }
}
