import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getWeather } from "../services/weatherApi";
import Loader from "../components/Loader";
import countryData from "../data/countryData";
import indianStates from "../data/indianStates";
import unionTerritories from "../data/unionTerritories";
import countryCapital from "../data/countryCapital";
import citySuggestions from "../data/citySuggestions";  

function Search() {
const location = useLocation();

useEffect(() => {
  if (location.state?.city) {

    setCity(location.state.city);

    setTimeout(() => {

      document.querySelector("button").click();

    }, 200);

  }

}, [location]);

const [city, setCity] = useState("");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const [searchType, setSearchType] = useState("");
const [searchedValue, setSearchedValue] = useState("");
const [capital, setCapital] = useState("");
const [currentTime, setCurrentTime] = useState(new Date());

const [lastUpdated, setLastUpdated] = useState("");
const [filteredCities, setFilteredCities] = useState([]);

useEffect(() => {

  if (!weather) return;

  const updateClock = () => {

    const now = new Date();

    const utc =
      now.getTime() + now.getTimezoneOffset() * 60000;

    // Add city's timezone offset
    const cityTime = new Date(
      utc + weather.timezone * 1000
    );

    setCurrentTime(cityTime);

  };

  updateClock();

  const timer = setInterval(updateClock, 1000);

  return () => clearInterval(timer);

}, [weather]);

const [history, setHistory] = useState(() => {
  const savedHistory = localStorage.getItem("weatherHistory");
  return savedHistory ? JSON.parse(savedHistory) : [];
});

const addToFavorites = () => {

  if (!weather) return;

  const favorite = {
    city: weather.name,
    country:
      countryData[weather.sys.country]?.name ||
      weather.sys.country,
    flag:
      countryData[weather.sys.country]?.flag ||
      "🌍",
  };

  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites = favorites.filter(
    (item) => item && item.city
  );

  const exists = favorites.some(
    (item) =>
      item.city.toLowerCase() ===
      favorite.city.toLowerCase()
  );

  if (!exists) {

    favorites.push(favorite);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert(favorite.city + " added to Favorites ⭐");

  } else {

    alert(favorite.city + " is already in Favorites.");

  }
};

  const handleSearch = async () => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }
    setError("");


    let searchLocation = city.trim();
    setSearchedValue(city.trim());
setSearchType("City");
setCapital("");


if (indianStates[searchLocation]) {

  setSearchType("Indian State");
  setCapital(indianStates[searchLocation]);

  searchLocation = indianStates[searchLocation];

}

else if (unionTerritories[searchLocation]) {

  setSearchType("Union Territory");
  setCapital(unionTerritories[searchLocation]);

  searchLocation = unionTerritories[searchLocation];

}


else if (countryCapital[searchLocation]) {

  setSearchType("Country");
  setCapital(countryCapital[searchLocation]);

  searchLocation = countryCapital[searchLocation];

}

setFilteredCities([]);
setLoading(true);

    try {
      const data = await getWeather(searchLocation);
      setLoading(false);

      if (data) {
        setWeather(data);
        
        setHistory((prev) => {
          const updated = [searchLocation, ...prev];
          const uniqueHistory = [...new Set(updated)].slice(0, 5);
          localStorage.setItem(
            "weatherHistory",
            JSON.stringify(uniqueHistory)
          );
          return uniqueHistory;
        });

        const now = new Date();
        const utc =
          now.getTime() + now.getTimezoneOffset() * 60000;
        const cityTime = new Date(
          utc + data.timezone * 1000
        );

        setLastUpdated(
          cityTime.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
        );
      }
    } catch (err) {
      setLoading(false);
      setWeather(null);
      setError(err.message || "An error occurred while fetching weather data.");
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="search-page">
      <h1>🔍 Search Weather</h1>

      <p>Search any city to view its current weather.</p>

      <div className="search-box">
        {/* <input
          type="text"
          placeholder="Enter City Name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        /> */}
        <input
  type="text"
  placeholder="Enter City Name..."
  value={city}
  onChange={(e) => {
    const value = e.target.value;

    setCity(value);

    if (value.trim() === "") {
      setFilteredCities([]);
    } else {
      const filtered = citySuggestions.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );

      setFilteredCities(filtered.slice(0, 6));
    }
  }}
/>
{filteredCities.length > 0 && (
  <div
    style={{
      width: "100%",
      background: "white",
      borderRadius: "10px",
      marginTop: "5px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      maxHeight: "220px",
      overflowY: "auto",
      textAlign: "left",
    }}
  >
    {filteredCities.map((item, index) => (
      <div
        key={index}
        onClick={() => {
          setCity(item);
          setFilteredCities([]);
        }}
        style={{
          padding: "12px",
          cursor: "pointer",
          borderBottom: "1px solid #eee",
          color: "black",
        }}
      >
        📍 {item}
      </div>
    ))}
  </div>
)}

        <button onClick={handleSearch}>Search</button>
      </div>

      {/* {loading && (
  <div className="loading-box">
    <h2>🔍 Searching Weather...</h2>
  </div>
)} */}
{loading && <Loader />}

{error && (
  <div className="error-card">
    <h2>❌ City Not Found</h2>
    <p>{error}</p>
  </div>
)}

{history.length > 0 && (

  <div className="weather-card" style={{ background: "white", color: "black" }}>

    <h2>🕘 Recent Searches</h2>

    {history.map((item, index) => (

      <p key={index}>📍 {item}</p>

    ))}

  </div>

)}  

      {weather && (
        // <div className="weather-card">

          <div
  className={`weather-card ${
    weather.weather[0].main.toLowerCase()
  }`}
>

          <h1 style={{ fontSize: "60px", textAlign: "center" }}>
            {countryData[weather.sys.country]?.flag || "🌍"}
          </h1>

          <h2 style={{ textAlign: "center" }}>
            {countryData[weather.sys.country]?.name || weather.sys.country}
          </h2>     

          <h3>🔎 You Searched : {searchedValue}</h3>

<h3>📂 Search Type : {searchType}</h3>

{capital && (
  <h3>🏛 Capital : {capital}</h3>
)}

<h3 style={{ textAlign: "center" }}>
  📍 Showing Weather For : {weather.name}
</h3>
          <div style={{ textAlign: "center" }}>
  <img
    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt="Weather Icon"
  />

  <h3>{weather.weather[0].main}</h3>

  <p>Weather Main: {weather.weather[0].main}</p>
</div>

          <hr />

          <p>📅 Date : {currentTime.toLocaleDateString()}</p>

<p>
  🕒 Local Time :
  {currentTime.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })}
</p>

<p>🔄 Last Updated : {lastUpdated}</p>  
<button
onClick={addToFavorites}
  style={{
    padding: "10px 20px",
    marginTop: "15px",
    background: "#ff9800",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  }}
>
  ⭐ Add to Favorites
</button>

<hr />

<div className="weather-grid">

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/1684/1684375.png"
        width="40"
        alt="Temperature"
    />

    <h4>Temperature</h4>

    <p>{weather.main.temp} °C</p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
        width="40"
        alt="Feels Like"
    />

    <h4>Feels Like</h4>

    <p>{weather.main.feels_like} °C</p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        width="40"
        alt="Weather"
    />

    <h4>Weather</h4>

    <p style={{ textTransform: "capitalize" }}>
        {weather.weather[0].description}
    </p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
        width="40"
        alt="Humidity"
    />

    <h4>Humidity</h4>

    <p>{weather.main.humidity}%</p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/5538/5538618.png"
        width="40"
        alt="Wind"
    />

    <h4>Wind Speed</h4>

    <p>{weather.wind.speed} m/s</p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
        width="40"
        alt="Pressure"
    />

    <h4>Pressure</h4>

    <p>{weather.main.pressure} hPa</p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
        width="40"
        alt="Visibility"
    />

    <h4>Visibility</h4>

    <p>{weather.visibility} m</p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/979/979585.png"
        width="40"
        alt="Sunrise"
    />

    <h4>Sunrise</h4>

    <p>{formatTime(weather.sys.sunrise)}</p>
</div>

  <div className="weather-item">
    <img
        src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
        width="40"
        alt="Sunset"
    />

    <h4>Sunset</h4>

    <p>{formatTime(weather.sys.sunset)}</p>
</div>

</div>

        </div>
      )}
    </div>
  );
}

export default Search;