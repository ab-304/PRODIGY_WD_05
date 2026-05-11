async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "61c929fb2f0c0e38764fc9e3bd4b5bd9";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        if (data.cod == "404") {

            alert("City not found");

            return;
        }

        if (data.cod == 401) {

            alert("API key not activated yet. Please wait.");

            return;
        }

        document.getElementById("cityName").innerText =
            data.name;

        document.getElementById("temperature").innerText =
            `${Math.round(data.main.temp)}°C`;

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            `${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `${data.wind.speed} km/h`;

    }

    catch (error) {

        alert("Something went wrong");

    }

}