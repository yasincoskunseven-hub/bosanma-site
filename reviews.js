import fetch from 'node-fetch';

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.PLACE_ID;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json({ reviews: data.result.reviews || [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
