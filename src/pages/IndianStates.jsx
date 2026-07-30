import indianStates from "../data/indianStates";
import unionTerritories from "../data/unionTerritories";
import { useNavigate } from "react-router-dom";

function IndianStates() {
  const navigate = useNavigate();

  const openWeather = (capital) => {
    navigate("/search", {
      state: {
        city: capital,
      },
    });
  };

  return (
    <div className="search-page">

      <h1>🇮🇳 Indian States</h1>

      <p>
        Click any Indian State to view the weather of its capital city.
      </p>

      <div className="states-grid">

        {Object.keys(indianStates).map((state) => (

          <div
            key={state}
            className="state-card"
            onClick={() => openWeather(indianStates[state])}
          >

            <h2>{state}</h2>

            <p>🏛 {indianStates[state]}</p>

          </div>

        ))}

      </div>

      <hr style={{ margin: "50px 0" }} />

      <h1>🏛 Union Territories</h1>

      <p>
        Click any Union Territory to view the weather of its capital city.
      </p>

      <div className="states-grid">

        {Object.keys(unionTerritories).map((ut) => (

          <div
            key={ut}
            className="state-card"
            onClick={() => openWeather(unionTerritories[ut])}
          >

            <h2>{ut}</h2>

            <p>🏛 {unionTerritories[ut]}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default IndianStates;