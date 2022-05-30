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
