import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  if (!API_KEY) {
    throw new Error(
      "API Key is missing. Create a .env file locally or configure OPENWEATHER_API_KEY in GitHub Secrets."
    );
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        throw new Error(
          "Invalid OpenWeather API Key (401). Please check your API key activation status."
        );
      } else if (status === 404) {
        throw new Error("City not found. Please check the spelling and try again.");
      } else if (status === 429) {
        throw new Error("API rate limit exceeded (429). Please try again later.");
      } else {
        throw new Error(
          error.response.data?.message ||
            `Weather API error (${status}).`
        );
      }
    } else if (error.request) {
      throw new Error(
        "Network error: Unable to connect to OpenWeather server."
      );
    } else {
      throw new Error(error.message || "Failed to fetch weather data.");
    }
  }
};