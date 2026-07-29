import countryData from "../data/countryData";
import { useNavigate } from "react-router-dom";

function Countries() {
  const navigate = useNavigate();

  const openWeather = (country) => {
    navigate("/search", {
      state: {
        city: country,
      },
    });
  };

  return (
    <div className="search-page">

      <h1>🌍 Countries</h1>

      <p>
        Click any country to view the weather of its capital city.
      </p>

      <div className="states-grid">

        {Object.keys(countryData).map((code) => (

          <div
            key={code}
            className="state-card"
            onClick={() => openWeather(countryData[code].capital)}
          >

            <h1 style={{ fontSize: "50px" }}>
              {countryData[code].flag}
            </h1>

            <h2>{countryData[code].name}</h2>

            <p>
              🏛 {countryData[code].capital}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Countries;