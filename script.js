const API_KEY = `b800d1fa615f93dcdd5d1b60a5898c46`;
const searchTemperature = () => {
    const cityName = document.getElementById('city-name');
    const cityField = cityName.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityField}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
    cityName.value = '';
}


const setCityName = (id, text) => {
    document.getElementById(id).innerText = text;

}
const displayTemperature = temperature => {
    setCityName('city', temperature.name);
    setCityName('temperature', temperature.main.temp);
    setCityName('condition', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
}