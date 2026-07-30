import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <h1>🌍 Weather Globe</h1>

        <h2>Your Global Weather Companion</h2>

        <p>
          Check the live weather, local time, temperature,
          humidity, and weather conditions for every country,
          Indian state, and union territory.
        </p>

        <Link to="/search">
          <button>Explore Weather</button>
        </Link>

      </section>

      <section className="features">

        <div className="card">
          <h3>🌍 Countries</h3>
          <p>
            Search the weather of countries around the world with
            live temperature, humidity, pressure, wind speed,
            sunrise and sunset.
          </p>
        </div>

        <div className="card">
          <h3>🇮🇳 Indian States</h3>
          <p>
            Get weather information for all 28 Indian States
            and 8 Union Territories using their capitals.
          </p>
        </div>

        <div className="card">
          <h3>🕒 Live Weather</h3>
          <p>
            View real-time weather conditions with dynamic weather
            icons and automatic weather backgrounds.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;