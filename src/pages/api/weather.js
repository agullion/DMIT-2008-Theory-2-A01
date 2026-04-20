export const getWeather = async () => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=53.5462055&lon=-113.491241&appid=${OPENWEATHER_API_KEY}&units=metric`)
  const data = await response.json();
  return data;
}