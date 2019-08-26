class GetWeather{
  constructor(){
    this.apiKey = 'd176520305ac82fb8b49ba931687a60a';
  }

  async getData(lat, lon){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
    
    const responseData = await response.json();

    return responseData;
  }
}
