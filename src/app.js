// current day and time
let date = new Date();
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = week[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();

if (minutes < 10) {
  minutes = "0" + minutes;
}

let time = (document.querySelector(
  "#time"
).innerHTML = `${day} ${hours}:${minutes}`);

//API weather key
let apiKey = "86bca7e68a1bdf77956b5e4ed10598f5";

//weather by search
function formSearch(event) {
  event.preventDefault();
  let cityName = searchCity.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(weatherUpdate);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", formSearch);

//weather by geolocation
function locationSearch() {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(weatherUpdate);
  });
}

let curLocation = document.querySelector("#location");
curLocation.addEventListener("click", locationSearch);
