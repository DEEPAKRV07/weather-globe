import { useNavigate } from "react-router-dom";

function Favorites() {
  const navigate = useNavigate();

  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const openWeather = (city) => {
    navigate("/search", {
      state: { city },
    });
  };

  const removeFavorite = (cityName) => {
    const updated = favorites.filter((item) => {
      if (typeof item === "string") {
        return item !== cityName;
      }

      return item.city !== cityName;
    });

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  return (
    <div className="search-page">
      <h1>⭐ Favorite Cities</h1>

      <p>
        Click a city to view its weather.
      </p>

      {favorites.length === 0 ? (
        <h2 style={{ marginTop: "40px" }}>
          No favorite cities added yet.
        </h2>
      ) : (
        <div className="states-grid">
          {favorites.map((item, index) => {
            const city =
              typeof item === "string"
                ? item
                : item.city;

            const country =
              typeof item === "string"
                ? "Added by You"
                : item.country || "Added by You";

            const flag =
              typeof item === "string"
                ? "⭐"
                : item.flag || "⭐";

            return (
              <div
                key={index}
                className="state-card"
              >
                <h1 style={{ fontSize: "50px" }}>
                  {flag}
                </h1>

                <h2>{city}</h2>

                <p>{country}</p>

                <button
                  onClick={() => openWeather(city)}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    background: "#1976d2",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  🌦 View Weather
                </button>

                <button
                  onClick={() =>
                    removeFavorite(city)
                  }
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "10px",
                    background: "#d32f2f",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  ❌ Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Favorites;
