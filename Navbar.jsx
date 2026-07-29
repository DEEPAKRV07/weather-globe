import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🌍 Weather Globe
      </div>

      {/* <ul className="nav-links">
        <li>Home</li>
        <li>Countries</li>
        <li>Indian States</li>
        <li>Search</li>
        <li>Favorites</li>
        <li>About</li>
      </ul> */}
      <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/countries">Countries</Link></li>
  <li><Link to="/indianstates">Indian States</Link></li>
  <li><Link to="/search">Search</Link></li>
  <li><Link to="/favorites">Favorites</Link></li>
  <li><Link to="/about">About</Link></li>
</ul>



    </nav>
  );
}

export default Navbar;