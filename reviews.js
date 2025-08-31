// Google Places API'den yorum çekmek için
const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
const PLACE_ID = "YOUR_PLACE_ID";

async function loadReviews() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=review&key=${API_KEY}`;

  document.getElementById("reviews").innerHTML = "Yorumlar şu an manuel eklenmeli veya backend ile çekilmeli.";
}

loadReviews();
