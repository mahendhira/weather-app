
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".icon");

const apiKey = "577bb0f2104ea068abadfa445ecb622e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function check(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".wind").innerHTML= Math.round(data.wind.speed) + "km/h";
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";

    if(data.weather[0].main == "Clouds"){
    icon.src = "images/clouds.png" ;
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
    icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }


    
}


searchbtn.addEventListener("click",()=>{
    check(searchBox.value);
})
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        check(searchBox.value);
    }
});

