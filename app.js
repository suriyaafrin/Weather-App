const apiKey= "be93a431a27ec67ace54d31b90bb7bb1";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
const search_bar=document.querySelector(".search-bar input");
const search_bar1=document.querySelector(".search-bar button");
const weather=document.querySelector(".weather");
async function checkWeather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind_speed").innerHTML = data.wind.speed+ "km/h";

    if(data.weather[0].main=="Clouds"){
        weather.src="https://static.vecteezy.com/system/resources/previews/016/642/177/original/cloudy-weather-icon-free-vector.jpg";
    }
    else if(data.weather[0].main=="Clear"){
        weather.src="https://cdn-icons-png.flaticon.com/128/3222/3222800.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather.src="https://cdn-icons-png.flaticon.com/128/3313/3313888.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather.src="data:image/webp;base64,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"
    }
    else if(data.weather[0].main=="Mist"){
        weather.src="https://th.bing.com/th/id/OIP.aA6Wg4-QUH5qcZnXXeBRxAHaHa?w=183&h=183&c=7&r=0&o=7&pid=1.7&rm=3";
    }
}

search_bar1.addEventListener("click",()=>{
    checkWeather(search_bar.value);
})


// https://api.openweathermap.org/data/2.5/weather?q=bangladesh&appid=be93a431a27ec67ace54d31b90bb7bb1

// const demo=document.getElementById("demo");
