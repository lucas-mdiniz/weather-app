const weather = new GetWeather;
const ui = new UserInterface;

weather.getData('divinópolis').then(data => {
  console.log(data);
  ui.showLocation(data.name, data.sys.country);
  ui.showTemperature(data.main.temp, data.weather[0].icon);
  ui.showDetails(data.dt, data.weather[0].description);
  ui.showAditionalDetails(data.main.humidity,data.wind.speed,data.sys.sunrise,data.sys.sunset);
});