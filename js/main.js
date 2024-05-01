var find = document.getElementById("find");
var search = document.getElementById("search");

// console.log(date);

// Get the current day of the week (0-6) and convert to string for display purposes
// var today = new Date();

var days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
var month = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

// For some reason
async function getApi(city) {
  var response = await fetch(
    ` http://api.weatherapi.com/v1/forecast.json?key=aaafcc23d491480c9b7211932240104&q=${city}&days=3`
  );
  var Data = await response.json();
  // finallyData = Data;

  showData(Data);
}
getApi("cairo");

function showData(finallyData) {
  var today = new Date(finallyData.current.last_updated);
  var toomrow = new Date(finallyData.forecast.forecastday[1].date);
  var toomrowToday = new Date(finallyData.forecast.forecastday[2].date);

  // console.log(days[toomrow.getDay()]);
  // console.log(days[today.getDay()]);
  var cartona = ``;
  // for (var i = 0; i < finallyData.length; i++) {
  cartona += `    
      <div class="col-md-3 text-center  chiled-1 text-white rounded-start p-0">
 <div class="d-flex justify-content-between rounded-start p-2 backlayer-1 w-100">
  <h6 class="pt-3 px-2   ">${days[today.getDay()]}</h6>
  <h6 class="pt-3 px-2 ">${today.getDate()+ "" +month[today.getMonth()] }</h6>
</div> 
  <div class="text-start ps-2 mt-4 mx-2"><h6>${finallyData.location.name}</h6></div>
  <div class="text-start ps-1 m-2">
    <h2 class=" font text-start fw-bolder">
    
    ${finallyData.current.temp_c} <sup>o</sup> C
      <img
        class="m-2"
        width="100px"
        src="http:${finallyData.current.condition.icon}"
        alt=""
      />
    </h2>
  </div>
  

  <div>
    <p class="m-4 text-start">  ${finallyData.current.condition.text}</p>
  </div>
  <div class="text-start">
    <span class="m-2"><img src="imges/icon-umberella.png"" alt="">   ${
      finallyData.current.wind_mph
    } mp/h</span>
    <span class="m-2"><img src="imges/icon-wind.png" alt=""> ${
      finallyData.current.wind_kph
    } km/h</span>
    <span class="m-2"><img src="imges/icon-compass.png" alt="">   ${
      finallyData.current.condition.text} </span>
  </div>
</div>


<div class="col-md-3 text-center chiled text-white p-0">
<div class="d-flex justify-content-center  w-100 backlayer-2">
  <h6 class="p-3 ">${days[toomrow.getDay()]}</h6>
  </div>
  <div>
    <img
      class="mt-4"
      width="50px"
      src="https:${finallyData.forecast.forecastday[1].day.condition.icon}"
      alt=""
    />
  </div>

  <div>
    <h4 class="m-2">    ${
      finallyData.forecast.forecastday[1].day.maxtemp_c
    }</h4>
  </div>
  <p class="m-4">  ${finallyData.forecast.forecastday[1].day.mintemp_c}</p>
  <div>
    <p class="m-4"> ${
      finallyData.forecast.forecastday[1].day.condition.text
    }</p>
  </div>
</div>



<div class="col-md-3 text-center chiled-1 text-white rounded-end p-0">
<div class="d-flex justify-content-center   rounded-end backlayer-1 w-100"> 
  <h6 class="p-3 ">${days[toomrowToday.getDay()]}</h6>
  </div>
  <div>
  <img
  class="mt-4"
  width="50px"
  src="https:${finallyData.forecast.forecastday[2].day.condition.icon}"
  alt=""
/>
  </div>

  <div>
    <h4 class="m-2">${finallyData.forecast.forecastday[2].day.maxtemp_c}</h4>
  </div>
  <p class="m-4"> ${finallyData.forecast.forecastday[2].day.mintemp_c}</p>
  <div>
    <p class="m-4"> ${
      finallyData.forecast.forecastday[2].day.condition.text
    }</p>
  </div>
</div>`;
  // }
  document.getElementById("weatherToDay").innerHTML = cartona;
}
search.addEventListener("click", function () {
  getApi(find.value);
});
find.addEventListener("input", function (e) {
  getApi(e.target.value);
});
