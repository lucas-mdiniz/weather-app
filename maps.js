class GetAdress{

  constructor(){
    this.inputArea = document.getElementById('search-field');
    this.autocomplete = new google.maps.places.Autocomplete(this.inputArea);
  }
  
  errorHandling(){
    document.querySelector('.error').classList.remove('d-none');
    setTimeout(function(){
      document.querySelector('.error').classList.add('d-none');
    },5000);
  }

  lat(){
    if(this.autocomplete.getPlace().geometry === undefined){
      this.errorHandling();
    } else {
      return this.autocomplete.getPlace().geometry.location.lat();
    }
    
  }

  lng(){
    if(this.autocomplete.getPlace().geometry === undefined){
      this.errorHandling();
    } else {
      return this.autocomplete.getPlace().geometry.location.lng();
    }
  }

}