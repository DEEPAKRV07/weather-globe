# 🌍 Weather Globe

**Weather Globe** is a modern, responsive React web application that provides real-time weather information for cities around the world, countries by capital cities, Indian states, and Union Territories using the OpenWeather API.

---

## ✨ Features

- 🔍 **City Search**: Instant weather lookup for any city worldwide with autocomplete suggestions.
- 🇮🇳 **Indian States & UTs**: Browse weather for all 28 Indian States and 8 Union Territories by capital city.
- 🌍 **Global Countries**: Explore country weather by capitals with flags.
- 🌡 **Live Weather Metrics**: Real-time temperature, feels like, humidity, wind speed, atmospheric pressure, visibility, sunrise, sunset, and local time.
- ⭐ **Favorites**: Save and manage your favorite cities in local storage.
- 🕘 **Recent Search History**: Quick access to recent searches.
- 📱 **Responsive Design**: Clean glassmorphism UI styled for desktop and mobile devices.

---

## 🛠 Technology Stack

- **Frontend Framework**: React 18 + Vite
- **Routing**: React Router DOM (HashRouter)
- **HTTP Client**: Axios
- **API**: OpenWeather API (Current Weather Data)
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/HARMITHAAVIJAYAKUMAR/weather-globe.git
cd weather-globe
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Edit `.env` and add your OpenWeather API key:
```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```
*(Get a free API key at [openweathermap.org](https://openweathermap.org/api))*

### 4. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

---

## 📦 Production Build & Testing

Build the project for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 GitHub Pages & GitHub Actions Setup

### 1. Configure Repository Secret
1. Go to your GitHub repository -> **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**.
3. Set **Name**: `OPENWEATHER_API_KEY`
4. Set **Value**: *Your OpenWeather API key*
5. Click **Add secret**.

### 2. Enable GitHub Actions Deployment
1. Go to your GitHub repository -> **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.

### 3. Deploy
Push any changes to the `main` branch:
```bash
git add .
git commit -m "Deploy Weather Globe"
git push origin main
```
GitHub Actions will automatically build and publish the site to:
`https://harmithaavijayakumar.github.io/weather-globe/`

---

## ❓ Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **404 Error on GitHub Pages** | Missing `index.html` or wrong router strategy | Handled automatically via `HashRouter` and `base: "/weather-globe/"` in `vite.config.js`. |
| **Invalid API Key (401)** | Missing/Unactivated API Key | Verify `VITE_OPENWEATHER_API_KEY` in `.env` or GitHub Secrets. New OpenWeather keys can take 10-60 mins to activate. |
| **City Not Found (404)** | Misspelled city name | Check spelling or select a city from the autocomplete dropdown. |

---

## 📄 License
This project is open-source and free to use.
