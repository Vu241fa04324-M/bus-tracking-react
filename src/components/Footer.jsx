import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>🚌 BusTrack</h2>
        <p>Smarter journeys, simpler travel.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/routes">Routes</Link>
        <Link to="/stops">Stops</Link>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} BusTrack. Student project demo.
      </p>
    </footer>
  );
}

export default Footer;