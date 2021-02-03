document.getElementById('button').addEventListener('click', function(){ 
    weatherCheck();
});

function weatherCheck(){
    const inputLocation = document.getElementById('input-location').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputLocation+'&units=metric&appid=1a65cc23cd3e9ad0090161f60941c698')
    .then(Response => Response.json())
    .then(data => {
        document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        const nameValue = data.name;
        const temperatureValue = data.main.temp;
        const descriptionValue = data.weather[0].description;

        document.getElementById('location-name').innerText = nameValue;
        document.getElementById('temperature').innerText = temperatureValue + ' °C';
        document.getElementById('description').innerText = descriptionValue;
        // console.log(data);
    })
    .catch(err => alert("Please enter the correct city name"));
}