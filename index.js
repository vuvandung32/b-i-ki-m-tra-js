const appKey = "d9e0abf6205f408db0e3978faa96c84a";

var searchButton = document.getElementById("search-btn"),
  searchInput = document.getElementById("search-txt"),
  cityName = document.getElementById("city-name"),
  icon = document.getElementById("icon"),
  temperature = document.getElementById("temp"),
  humidity = document.getElementById("humidity-div");
  may = document.getElementById("may_div");
  datetime=document.getElementById("date_div");
  sunrise=document.getElementById("surise_div");
  sunset=document.getElementById("sunset_div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {

  }else {
    let searchLink = "https://api.weatherbit.io/v2.0/current?city=" + searchInput.value + "&key="+appKey;
    console.log(searchLink);    
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  var jsonObject = JSON.parse(response);
  console.log(jsonObject);
  cityName.innerHTML = jsonObject.data[0].city_name;
   icon.src = "/icons/" + jsonObject.data[0].weather.icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.data[0].app_temp) + "°";
  may.innerHTML = jsonObject.data[0].weather.description;
  datetime.innerHTML=jsonObject.data[0].datetime;
  sunrise.innerHTML=jsonObject.data[0].sunrise;
  sunset.innerHTML=jsonObject.data[0].sunset;
  
 
}

function httpRequestAsync(url, callback)
{
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => { 
      if (httpRequest.readyState == 4 && httpRequest.status == 200)
          callback(httpRequest.responseText);
  }
  httpRequest.open("GET", url, true); 
  httpRequest.send();
}
function tai_lai_trang(){
  location.reload();
}
