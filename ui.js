class UserInterface {
  constructor () {
    this.locationField = document.getElementById('location');
    this.temperatureField = document.getElementById('temperature');
    this.detailsField = document.getElementById('details');
    this.sunRiseField = document.getElementById('sunrise');
    this.sunSetField = document.getElementById('sunset');
    this.windField = document.getElementById('wind');
    this.humidityField = document.getElementById('humidity');
    
    this.lpad = function(value, padding) {
      var zeroes = new Array(padding+1).join("0");
      return (zeroes + value).slice(-padding);
    }
  }
  
  clearClasses(){
    document.querySelector('body').className='d-flex align-items-center';
    document.getElementById('search-field').value='';
  }

  showLocation(city, country){
    this.locationField.innerHTML = `${city}, <span>${country}</span>`;
  }

  showTemperature(temperature, iconID){
    const celciusTemp = (temperature - 273.15).toFixed(1);
    this.temperatureField.innerHTML = ` <img src="http://openweathermap.org/img/w/${iconID}.png">${celciusTemp}<span class="temperature-symbol">&#186;C</span>`;
  }

  showDetails(date, timezone, details){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formatedDate = new Date((date+timezone)*1000);
    const dateDay = days[formatedDate.getUTCDay()];
    const dateTime = `${this.lpad(formatedDate.getUTCHours(),2)}:${this.lpad(formatedDate.getUTCMinutes(),2)}`;

    const description = details;

    this.detailsField.innerHTML = `
      <p>${dateDay} <time class='time'>${dateTime}</time></p>
      <p class='weather text-capitalize'>${description}</p>
    `;
  }

  showAditionalDetails(humidity, wind, sunRise, sunSet, timezone){
    const sunRiseTime = new Date((sunRise+timezone)*1000);
    const sunSetTime = new Date((sunSet+timezone)*1000);
    const windSpeed = (wind*3.6).toFixed(1);



    this.sunRiseField.innerHTML = `Sunrise: ${this.lpad(sunRiseTime.getUTCHours(),2)}:${this.lpad(sunRiseTime.getUTCMinutes(),2)}`;
    this.sunSetField.innerHTML = `Sunset: ${this.lpad(sunSetTime.getUTCHours(),2)}:${this.lpad(sunSetTime.getUTCMinutes(),2)}`;
    this.humidityField.innerHTML = `Humidity: ${humidity}%`;
    this.windField.innerHTML = `Wind: ${windSpeed} km/h`;

  }

  changeUx(date, sunSet, sunRise, timezone){
    const body = document.querySelector('body');
    const weather = document.querySelector('.weather').innerHTML;
    const time = new Date((date+timezone)*1000);
    const sunset = new Date((sunSet+timezone)*1000);
    const sunrise = new Date((sunRise+timezone)*1000);
    let isDay;

    if(time>=sunset || time<sunrise){
      isDay = false;
      document.querySelector('#weather-container').classList.add('night');
      document.querySelector('#weather-container').classList.remove('day');
    }
    else{
      isDay = true;
      document.querySelector('#weather-container').classList.add('day');
      document.querySelector('#weather-container').classList.remove('night');
    }

    if (weather.includes('clear sky')) {

      if (isDay) {
        body.classList.add('clear-day');
      } else {
        body.classList.add('clear-night');
      }

    } else if (weather.includes('clouds')) {

      if (isDay) {
        body.classList.add('cloudy-day');
      } else {
        body.classList.add('cloudy-night');
      }

    } else if (weather.includes('rain')) {

      if (isDay) {
        body.classList.add('rainy-day');
      } else {
        body.classList.add('rainy-night');
      }

    } else if (weather.includes('thunderstorm')) {

        body.classList.add('thunderstorm');

    } else if (weather.includes('snow')) {

      if (isDay) {
        body.classList.add('snowy-day');
      } else {
        body.classList.add('snowy-night');
      }
      
    } else if (weather.includes('mist')) {

      if (isDay) {
        body.classList.add('mist-day');
      } else {
        body.classList.add('mist-night');
      }
      
    }
  }
}
