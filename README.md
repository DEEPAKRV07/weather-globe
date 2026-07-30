# 🌍 Weather Globe

**Weather Globe** is a modern React + Vite web application that provides real-time weather information for cities around the world, countries by capital cities, Indian states, and Union Territories using the OpenWeather API.

Built with:
- ⚛ **React 18**
- ⚡ **Vite 6**
- 🔗 **React Router (HashRouter)**
- 📡 **Axios**
- 🤖 **GitHub Actions**
- 🌐 **GitHub Pages**

> The repository has been restructured for Vite, configured for GitHub Pages deployment via GitHub Actions, and verified to build successfully. Successful weather queries also depend on a valid, active OpenWeather API key being configured.

---

## 🚀 Quick Start (5 Minutes)

### 1. Clone the repository
```bash
git clone https://github.com/HARMITHAAVIJAYAKUMAR/weather-globe.git
cd weather-globe
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env`
Create a file named `.env` in the project root:
```env
VITE_OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```
*(Replace `YOUR_OPENWEATHER_API_KEY` with your key from [openweathermap.org](https://openweathermap.org/))*

### 4. Run the project
```bash
npm run dev
```
Open `http://localhost:5173/weather-globe/` in your browser. The application is now running locally!

---

## 📈 Project Evolution

| Original Repository | This Pull Request |
| :--- | :--- |
| ❌ No Vite configuration | ✅ Standard Vite project structure |
| ❌ No `package.json` | ✅ Fully configured `package.json` |
| ❌ No `index.html` | ✅ Clean `index.html` HTML5 template |
| ❌ GitHub Pages returned 404 | ✅ GitHub Pages fully compatible |
| ❌ No GitHub Actions workflow | ✅ Automated `.github/workflows/deploy.yml` |
| ❌ No environment variable support | ✅ Safe `VITE_OPENWEATHER_API_KEY` handling |
| ❌ `BrowserRouter` caused refresh 404s | ✅ `HashRouter` for 100% routing stability |
| ❌ Disorganized flat file layout | ✅ Structured `src/components/`, `pages/`, `data/`, `services/` |

---

## 🔍 How to Review This Pull Request

After merging this PR into `main`:

### Step 1: Add OpenWeather Secret
1. Go to repository **Settings** -> **Secrets and variables** -> **Actions**.
2. Click **New repository secret**.
3. Set **Name**: `OPENWEATHER_API_KEY`.
4. Set **Secret**: *(Paste your valid OpenWeather API Key)*.

### Step 2: Set GitHub Pages Source
1. Go to repository **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.

### Step 3: Verify Deployment
1. Go to the **Actions** tab and wait for the deployment workflow to complete.
2. Visit `https://HARMITHAAVIJAYAKUMAR.github.io/weather-globe/`.
3. Test searching for cities like **Chennai**, **Coimbatore**, or **Delhi**.

---

## 📋 Features

- 🔍 **Search Weather by City**: Instant live weather lookup for any city worldwide with autocomplete search suggestions.
- 🇮🇳 **Indian States & Union Territories**: Browse current weather for all 28 Indian States and 8 Union Territories by capital city.
- 🌍 **Global Countries**: Search and view live weather conditions for countries around the world using their capitals.
- 🌡 **Live Weather Metrics**: Real-time temperature, feels-like temperature, humidity, wind speed, pressure, visibility, sunrise/sunset times, and local city time.
- ⭐ **Favorite Locations**: Save and manage your favorite cities stored locally in your browser (`localStorage`).
- 🕘 **Recent Searches**: Automatically keeps track of your recent searches for easy access.
- 🎨 **Dynamic Glassmorphism UI**: Beautiful background gradients and responsive cards tailored for both desktop and mobile devices.
- 🚀 **Automated GitHub Pages Deployment**: Fully automated build and deployment workflow using GitHub Actions.

---

## 📁 Project Folder Structure

```text
weather-globe/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automatic deployment
├── public/
│   ├── favicon.svg             # Website tab icon
│   └── icons.svg               # Application icons
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Footer.jsx          # Page footer with project information
│   │   ├── Loader.jsx          # Loading spinner animation component
│   │   └── Navbar.jsx          # Top navigation bar with router links
│   ├── data/                   # Static data dictionaries and suggestion lists
│   │   ├── citySuggestions.js  # Autocomplete dataset for search input
│   │   ├── countryCapital.js   # Country to capital mapping dataset
│   │   ├── countryData.js      # Country flags and names mapping
│   │   ├── indianStates.js     # Indian States to capital mapping dataset
│   │   └── unionTerritories.js # Union Territories to capital mapping dataset
│   ├── pages/                  # Main application views/routes
│   │   ├── About.jsx           # Information page about the project
│   │   ├── Countries.jsx       # Global countries weather page
│   │   ├── Favorites.jsx       # Saved favorite cities page
│   │   ├── Home.jsx            # Landing/Home hero page
│   │   ├── IndianStates.jsx    # Indian states and UTs weather page
│   │   └── Search.jsx          # Live weather search page
│   ├── services/
│   │   └── weatherApi.js       # OpenWeather API integration service with error handling
│   ├── App.css                 # Application-wide global styling
│   ├── App.jsx                 # Main application layout and routes
│   ├── index.css               # Base CSS reset and root theme styles
│   └── main.jsx                # React application entry point (HashRouter)
├── index.html                  # HTML5 template entry point for Vite
├── package.json                # Project dependencies, scripts, and metadata
├── vite.config.js              # Vite build tool and base path configuration
├── .env.example                # Template for required environment variables
├── .gitignore                  # Files and directories ignored by Git
└── README.md                   # Complete project documentation
```

---

## 📦 Production Build

To test or build the application for production deployment:

### Build the Application
```bash
npm run build
```
This runs Vite to compile and optimize all React code and static assets into the `dist/` directory.

### Preview the Built Application
```bash
npm run preview
```
This starts a local preview server to verify how your application will perform in production.

---

## 🌐 GitHub Pages Deployment Details

This repository uses **GitHub Actions** to compile and deploy the site to GitHub Pages automatically whenever code is pushed to the `main` branch.

During the `npm run build` step, GitHub Actions injects the repository secret `${{ secrets.OPENWEATHER_API_KEY }}` into `import.meta.env.VITE_OPENWEATHER_API_KEY`.

---

## 💻 Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm install` | Downloads and installs all project dependencies |
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and minifies the React application into the `dist/` production folder |
| `npm run preview` | Runs a local web server to test the production build from `dist/` |

---

## ❓ Troubleshooting

| Issue / Error | Cause | Solution |
| :--- | :--- | :--- |
| **404 Not Found on GitHub Pages** | Missing `index.html` at root or incorrect routing setup | Ensure `index.html` exists at root, `base: "/weather-globe/"` is in `vite.config.js`, and `HashRouter` is used in `main.jsx`. |
| **Invalid API Key (401 Error)** | Unactivated key or missing environment variable | Newly created OpenWeather API keys take **10 to 60 minutes** to activate. Confirm `VITE_OPENWEATHER_API_KEY` is set in `.env` or `OPENWEATHER_API_KEY` in GitHub Secrets. |
| **City Not Found (404 Error)** | Misspelled city name | Check city spelling or select from the autocomplete dropdown menu. |
| **Blank Screen on Page Reload** | Standard `BrowserRouter` failing on static server | Using `HashRouter` resolves this issue on GitHub Pages. |
| **Build Fails in GitHub Actions** | Missing repository secret | Add `OPENWEATHER_API_KEY` under **Repository Settings -> Secrets and variables -> Actions**. |

---

## 🔍 What Was Wrong in the Original Repository

When initially deployed, the GitHub Pages site returned a **404 Error**. Here is the breakdown of why the original repository failed:

1. **No `index.html` Entry File**: The repository contained loose `.jsx` and `.js` source files uploaded directly to the root. GitHub Pages requires an `index.html` file at root to serve web pages.
2. **Missing `package.json`**: Without a `package.json` file, dependencies like React, React Router, and Axios could not be installed, and build scripts could not run.
3. **Missing `vite.config.js`**: Vite had no build configuration or base path to compile JSX into browser-compatible JavaScript.
4. **Disorganized Flat File Layout**: All source files were uploaded flat into the root directory, breaking internal relative imports (e.g. `import Navbar from "./components/Navbar"` failed because `Navbar.jsx` was not in a `components` folder).
5. **Used `BrowserRouter`**: Standard `BrowserRouter` causes 404 errors on GitHub Pages when users refresh sub-pages (e.g. `/search` or `/countries`).
6. **No GitHub Actions Workflow**: No automated workflow existed to run `npm run build` and output static production files for GitHub Pages.
7. **Unsafe API Key Handling**: API keys were not structured to read from Vite environment variables (`import.meta.env`).

---

## 📜 Credits

This Pull Request modernizes the Weather Globe project architecture, build system, and deployment pipeline while preserving all original features, styling, and application logic.
