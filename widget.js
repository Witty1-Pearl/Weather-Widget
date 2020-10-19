function getCurrentWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=24bfe7a535e8bfa7655837c09515da58")
    .then(response => response.json())
        .then(data => {
            console.log(data);
            let result = `
            <div class="row double">
        
      
                <div class="col-md-6 px-5">
                    <h1 class="h5">${data.base}</h1>
                    <h3 class="display-4 pb-5">${convertToCelsius(data.main.temp)}&deg;c</h3>
                </div>
                <div class="col-md-6">
                   <i class="fa ${getIcon(convertToCelsius(data.main.temp))} fa-4x pb-5"></i>
                </div>
                </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="double">
                                <p>longitude: ${data.coord.lon}N</p>
                                <p>latitude: ${data.coord.lat}E</p>
                            </div>
                            <div class="double">
                                <p>Pressure: ${data.main.pressure}</p>
                                <p>Humidity: ${data.main.humidity}</p>
                            </div>
                            <div class="double">
                                <p>Temperature Max: ${data.main.temp_max}</p>
                                <p>Temperature Min.: ${data.main.temp_min}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            `;
            document.querySelector("#weather").innerHTML = result;
        }
        )
}
getCurrentWeather();

function convertToCelsius(temp){
    return (temp - 273.15).toFixed(2); 
}

function getIcon(temp){
if(temp > 39){
    return "fa-sun";
}else if(temp =>10 &&temp <= 39 ){
    return "fa-cloud";
}else{
    return "fa-bolt";
}
}
