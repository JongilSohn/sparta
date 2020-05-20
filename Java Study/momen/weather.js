const weather = document.querySelector(".js-weather");
const API_KEY = "eb41bd627678b99f18bb92a1f2de53a8";
const coords = "coords";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response) {        //then()은 데이터가 넘어왔을 때, 함수를 호출한다.
        return response.json();
    }).then(function(json) {
        const temperature =json.main.temp;
        const place = json.name;
        weather.innerText=`${temperature} and ${place}`
    });}
    //fetch()안에는 가져올 데이터가 들어가면 된다. 앞에 https://넣어주고 !! 따옴표가 아닌 백틱을 사용해야한다.
    // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key} 는 OpenweatherMap의 Geographic에서 준 주소이다.


function saveCoords(coordsObj) {
    localStorage.setItem(coords, JSON.stringify(coordsObj))
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude: latitude,       //객체의 변수이름과 Key의 이름을 같게 저장하려면
        longitude: longitude        // lattitude, longitude만 써도 된다.
    };
    
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError() {
    console.log("Cant load geolocation");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);     // navigator API 사용
    // 위의 함수를 사용하여 현재 위치를 불러온다.
    console.log(getCurrentPosition);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(coords);

    if (loadedCoords === null) {
        askForCoords();
    }
    else { 
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        console.log(parsedCoords.latitude, parsedCoords.longitude)
    }

}

function init() {
    loadCoords();
}
init();