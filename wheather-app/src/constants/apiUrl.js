const location = "London,uk";
const api_key = "8947d5c53414ed23e88d15c1265e2821";
const url_base_weather = "api.openweathermap.org/data/2.5/weather";
export const api_weather = `http://${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;