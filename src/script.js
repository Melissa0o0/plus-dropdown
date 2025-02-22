function updateTime() {
  let userTimeZone = moment.tz.guess();
  let userTime = moment().tz(userTimeZone);

  document.querySelector("#local-city").innerHTML = userTimeZone
    .replace("_", " ")
    .split("/")[1];
  document.querySelector("#local-date").innerHTML =
    userTime.format("MMMM Do YYYY");
  document.querySelector("#local-time").innerHTML =
    userTime.format("h:mm:ss A");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="current-city">
  <h2>${cityName}</h2>
 <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
   <div class="time">${cityTime.format("h:mm:ss A")}</div>
 </div>`;

  setInterval(() => {
    let updatedTime = moment().tz(cityTimeZone);
    document.querySelector(".time").innerHTML = updatedTime.format("h:mm:ss A");
  });
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
