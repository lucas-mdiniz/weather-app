const weather = new GetWeather;
const ui = new UserInterface;
const googleMaps = new GetAdress;
const searchField = document.getElementById('search-field');

let lat;
let lon;

googleMaps.autocomplete.addListener('place_changed', getPlace);
searchField.addEventListener('keydown', preventEnter);

function showScreen(lat, lon){
  weather.getData(lat, lon).then(data => {

    ui.showLocation(data.name, data.sys.country);
    ui.showTemperature(data.main.temp, data.weather[0].icon);
    ui.showDetails(data.dt,data.timezone, data.weather[0].description);
    ui.showAditionalDetails(data.main.humidity,data.wind.speed,data.sys.sunrise,data.sys.sunset, data.timezone);
    ui.changeUx(data.dt, data.sys.sunset,data.sys.sunrise, data.timezone);
  });
  
  ui.clearClasses();
}

if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(function(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    showScreen(lat, lon);
  })
}

function getPlace(){
  lat = googleMaps.lat();
  lon = googleMaps.lng();
  if(lat!== undefined && lon !== undefined){
    showScreen(lat, lon);
  }
}

function preventEnter(event){
  
  if(event.keyCode===13){

    if(searchField.value===''){
      document.querySelector('.error').classList.remove('d-none');
      setTimeout(function(){
        document.querySelector('.error').classList.add('d-none');
      },5000);
    }
    
    event.preventDefault();
  }
}
