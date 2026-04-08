async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "9a519edc10d85b403570b3825a418ff4";

    if (city === "") {
        document.getElementById("weatherResult").innerHTML = "⚠ Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            document.getElementById("weatherResult").innerHTML = "❌ City not found";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "⚠ Error fetching data";
        console.log(error);
    }
}