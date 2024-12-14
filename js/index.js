let day_ =document.getElementById("day_");
let monthName = document.getElementById("monthName");
let dayNUm = document.getElementById("dayNUm");
let loca =document.getElementById("loca");
let todayTm =document.querySelector("#todayTm")
let textTo =document.querySelector("#textTo")
let imgTo =document.querySelector("#imgTo")
let rainto =document.querySelector("#rainto")
let wind_to =document.querySelector("#wind_to")
let wind_dr =document.querySelector("#wind_dr")
let day_two =document.querySelector("#day_two")



async function getWeather(loca){
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=bfa64e50c24d4703a6f180324241312&q=${loca}&days=3&aqi=no&alerts=no`)

    let weather = await res.json()
    console.log(weather);
    display(weather);
    displayTowmoro(weather)
    displayafterTowmoro(weather);
};


function display(weather){

    let todayD = weather.current.last_updated;

    console.log(todayD);
    let dayDataName = new Date(todayD)
    let DayName = dayDataName.toLocaleString("en-us",{weekday:`long`})//name of today 
    day_.innerHTML= DayName;
    let montH =dayDataName.toLocaleString("en-us",{month:`long`})
monthName.innerHTML=montH;
let numDate =dayDataName.getDate();
dayNUm.innerHTML=numDate;
loca.innerHTML=weather.location.name;
todayTm.innerHTML=weather.current.temp_c;
textTo.innerHTML=weather.current.condition.text;
rainto.innerHTML=weather.current.humidity;
wind_to.innerHTML=weather.current.wind_kph;
wind_drinnerHTML=weather.current.wind_dir;

}
let tomm_Tm = document.getElementById("tomm_Tm")
let tomm_tp = document.getElementById("tomm_tp")
let text_tom =document.getElementById("text_tom")
function displayTowmoro(weather){
    let Daytwo = weather.forecast.forecastday[1]
     let TommDay = new Date(Daytwo.date)
     let day =TommDay.toLocaleString("en-us",{weekday:`long`})
     day_two.innerHTML=day
     tomm_Tm.innerHTML=Daytwo.day.maxtemp_c;
     tomm_tp.innerHTML=Daytwo.day.maxtemp_f;
     text_tom.innerHTML=Daytwo.day.condition.text;

}
let after_Tm =document.getElementById("after_Tm");
let after_tp =document.getElementById("after_tp")
let after_text =document.getElementById("after_text")
let day_third =document.getElementById("day_third");
function displayafterTowmoro(weather){
    let Dayth = weather.forecast.forecastday[2]
     let afterDay = new Date(Dayth.date)
     let day =afterDay.toLocaleString("en-us",{weekday:`long`})
     day_third.innerHTML=day
     after_Tm.innerHTML= Dayth.day.maxtemp_c;
     after_tp.innerHTML= Dayth.day.maxtemp_f;
     after_text.innerHTML= Dayth.day.condition.text;

}




navigator.geolocation.getCurrentPosition((e)=>{
console.log(e.coords);
let myLatitude = e.coords.latitude;
let myLongitude = e.coords.longitude;
getWeather(`${myLatitude},${myLongitude}`);


});

let search = document.getElementById("search");

search.addEventListener("input",(a)=>{

    let current_city = a.target.value;
    getWeather(current_city);
})







