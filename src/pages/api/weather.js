const API_KEY = process.env.OPENWEATHER_API_KEY

export const getWeather = async (location) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
  const data = await response.json();
  return data;
}