// import Footer from "./components/Footer";
function Footer() {
  return (
    <footer
      style={{
        background: "#1565c0",
        color: "white",
        padding: "30px 20px",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <h2>🌍 Weather Globe</h2>

      <p style={{ marginTop: "10px", fontSize: "16px" }}>
        Your Global Weather Companion
      </p>

      <p
        style={{
          maxWidth: "700px",
          margin: "15px auto",
          lineHeight: "1.7",
        }}
      >
        Weather Globe provides live weather information for cities,
        countries, Indian states, and union territories using the
        OpenWeather API. Get real-time temperature, humidity, wind
        speed, pressure, sunrise, sunset, visibility, and local time
        in one place.
      </p>

      <hr
        style={{
          width: "80%",
          margin: "20px auto",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      />

      <p>📧 Email: weatherglobe@gmail.com</p>

      <p>🌐 Website: www.weatherglobe.com</p>

      <p>📍 Itanagar, Arunachal Pradesh, India</p>

      <hr
        style={{
          width: "80%",
          margin: "20px auto",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      />

      <p style={{ fontWeight: "bold" }}>
        Developed by Harmithaa V
      </p>

      <p>
        © {new Date().getFullYear()} Weather Globe. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;