export const getWeather = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`)
  const data = await response.json();
  return data;
}