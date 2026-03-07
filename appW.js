const apiKey="be93a431a27ec67ace54d31b90bb7bb1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
const sec=document.querySelector(".sec");
const sec_1=document.querySelector(".sec_1");
const units =document.querySelector(".units")
async function showWeather(city) {
    const reponse=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await reponse.json();
    console.log(data);
    document.querySelector(".left-part h4").innerHTML=data.name;
    document.querySelector(".right-part p").innerHTML=Math.round(data.main.temp) +"° c";
    document.querySelector(".feels p:last-child").innerHTML=Math.round(data.main.feels_like)+"° c";
    document.querySelector(".humidity p:last-child").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind p:last-child").innerHTML=data.wind.speed +"km/h";
}

sec_1.addEventListener("click",()=>{
    showWeather(sec.value);
})