class UserInterface {
  constructor () {
    this.locationField = document.getElementById('location');
    this.temperatureField = document.getElementById('temperature');
    this.detailsField = document.getElementById('details');
    this.sunRiseField = document.getElementById('sunrise');
    this.sunSetField = document.getElementById('sunset');
    this.windField = document.getElementById('wind');
    this.humidityField = document.getElementById('humidity');
  }
  
  showLocation(city, country){
    this.locationField.innerHTML = `${city}, <span>${country}</span>`;
  }

  showTemperature(temperature, iconID){
    const celciusTemp = (temperature - 273.15).toFixed(1);
    this.temperatureField.innerHTML = ` <img src="http://openweathermap.org/img/w/${iconID}.png">${celciusTemp}<span class="temperature-symbol">&#186;C</span>`;
  }

  showDetails(date, details){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formatedDate = new Date(date*1000);
    const dateDay = days[formatedDate.getDay()];
    const dateTime = `${formatedDate.getHours()}:${formatedDate.getMinutes()}`;

    const description = details;

    this.detailsField.innerHTML = `
      <p>${dateDay} ${dateTime}</p>
      <p>${description}</p>
    `;
  }

  showAditionalDetails(humidity, wind, sunRise, sunSet){
    const sunRiseTime = new Date(sunRise*1000);
    const sunSetTime = new Date(sunSet*1000);
    const windSpeed = (wind*3.6).toFixed(1);

    this.sunRiseField.innerHTML = `Sunrise: ${sunRiseTime.getHours()}:${sunRiseTime.getMinutes()}`;
    this.sunSetField.innerHTML = `Sunset: ${sunSetTime.getHours()}:${sunSetTime.getMinutes()}`;
    this.humidityField.innerHTML = `Humidity: ${humidity}%`;
    this.windField.innerHTML = `Wind: ${windSpeed} km/h`;

  }
}