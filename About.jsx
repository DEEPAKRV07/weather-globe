function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "35px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            color: "#38bdf8",
            marginBottom: "20px",
          }}
        >
          🌍 About Weather Globe
        </h1>

        <p
          style={{
            fontSize: "19px",
            textAlign: "justify",
            lineHeight: "1.8",
          }}
        >
          <strong>Weather Globe</strong> is a modern React-based Weather
          Application that provides real-time weather information for cities
          around the world. The application uses the OpenWeather API to fetch
          accurate weather data and displays it in a simple, responsive and
          attractive user interface.
        </p>

        <hr style={{ margin: "30px 0", borderColor: "#4b5563" }} />

        <h2 style={{ color: "#38bdf8" }}>✨ Key Features</h2>

        <ul style={{ fontSize: "18px", lineHeight: "2" }}>
          <li>🔍 Search Weather by City</li>
          <li>🏞 Search Indian States</li>
          <li>🏛 Search Union Territories</li>
          <li>🌍 Search Countries by Capital Cities</li>
          <li>🌡 Live Temperature</li>
          <li>💧 Humidity</li>
          <li>💨 Wind Speed</li>
          <li>📊 Pressure</li>
          <li>👀 Visibility</li>
          <li>🌅 Sunrise & Sunset</li>
          <li>🕒 Local Time</li>
          <li>🎨 Dynamic Weather Theme</li>
          <li>⭐ Favorite Cities</li>
          <li>🕘 Recent Searches</li>
          <li>📍 Search Suggestions (Autocomplete)</li>
          <li>💻 Responsive User Interface</li>
        </ul>

        <hr style={{ margin: "30px 0", borderColor: "#4b5563" }} />

        <h2 style={{ color: "#38bdf8" }}>🛠 Technologies Used</h2>

        <ul style={{ fontSize: "18px", lineHeight: "2" }}>
          <li>⚛ React JS</li>
          <li>🌐 HTML5</li>
          <li>🎨 CSS3</li>
          <li>📝 JavaScript (ES6)</li>
          <li>🔗 React Router DOM</li>
          <li>☁ OpenWeather API</li>
          <li>💾 Local Storage</li>
        </ul>

        <hr style={{ margin: "30px 0", borderColor: "#4b5563" }} />

        <h2 style={{ color: "#38bdf8" }}>🚀 Future Enhancements</h2>

        <ul style={{ fontSize: "18px", lineHeight: "2" }}>
          <li>🌤 5-Day Weather Forecast</li>
          <li>🌫 Air Quality Index (AQI)</li>
          <li>☀ UV Index</li>
          <li>📍 Live GPS Weather Detection</li>
          <li>🌎 Multiple Language Support</li>
          <li>📱 Mobile Application Version</li>
          <li>📊 Weather Charts & Graphs</li>
          <li>🔔 Weather Alert Notifications</li>
        </ul>

        <hr style={{ margin: "30px 0", borderColor: "#4b5563" }} />

        <h2 style={{ color: "#38bdf8" }}>👨‍💻 Project Components</h2>

        <ul style={{ fontSize: "18px", lineHeight: "2" }}>
          <li>🧭 Navbar Component</li>
          <li>🏠 Home Component</li>
          <li>🌍 Countries Component</li>
          <li>🏞 Indian States Component</li>
          <li>🔎 Search Component</li>
          <li>⭐ Favorites Component</li>
          <li>ℹ About Component</li>
          <li>⏳ Loader Component</li>
          <li>🔍 SearchBar Component (Reusable)</li>
          <li>🌦 WeatherCard Component (Reusable)</li>
          <li>📄 Footer Component</li>
        </ul>

        <hr style={{ margin: "30px 0", borderColor: "#4b5563" }} />

        <h2 style={{ color: "#38bdf8" }}>🎯 Project Objective</h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          The main objective of Weather Globe is to provide users with
          accurate, real-time weather information through a clean,
          user-friendly and responsive interface. Users can search weather by
          city, Indian states, Union Territories and countries using their
          capital cities while also managing favorite locations and viewing
          recent searches.
        </p>

        <hr style={{ margin: "30px 0", borderColor: "#4b5563" }} />

        <h3
          style={{
            textAlign: "center",
            color: "#facc15",
            marginTop: "20px",
          }}
        >
          ⭐ Developed using React JS & OpenWeather API ⭐
        </h3>
      </div>
    </div>
  );
}

export default About;