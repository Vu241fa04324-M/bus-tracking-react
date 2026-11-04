import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const popularRoutes = [
  {
    id: 101,
    from: "Guntur",
    to: "Vijayawada",
    via: "Mangalagiri",
    time: "1 hr 15 min",
  },
  {
    id: 205,
    from: "Guntur",
    to: "Amaravati",
    via: "Pedakakani",
    time: "55 min",
  },
  {
    id: 310,
    from: "Guntur",
    to: "Tenali",
    via: "Namburu",
    time: "50 min",
  },
];

function Home() {
  const [busNumber, setBusNumber] = useState("");
  const navigate = useNavigate();

  function searchBus(event) {
    event.preventDefault();

    if (!busNumber.trim()) {
      alert("Please enter a bus number.");
      return;
    }

    navigate(`/tracking?bus=${encodeURIComponent(busNumber.trim())}`);
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">YOUR JOURNEY, SIMPLIFIED</span>
          <h1>Track your bus.<br />Travel with confidence.</h1>
          <p>
            Explore bus routes, discover stops and check bus information
            from one simple dashboard.
          </p>

          <form className="search-form" onSubmit={searchBus}>
            <input
              value={busNumber}
              onChange={(event) => setBusNumber(event.target.value)}
              placeholder="Enter bus number, e.g. 101"
              aria-label="Bus number"
            />
            <button type="submit">Find Bus →</button>
          </form>

          <div className="hero-actions">
            <Link className="button secondary-button" to="/routes">
              Explore Routes
            </Link>
            <Link className="text-link" to="/tracking">
              Track a bus →
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="map-card">
            <div className="map-top">
              <span>BUS NETWORK</span>
              <span className="demo-badge">DEMO</span>
            </div>
            <div className="map-area">
              <div className="road road-one" />
              <div className="road road-two" />
              <div className="road road-three" />
              <span className="map-pin pin-one">📍</span>
              <span className="map-pin pin-two">📍</span>
              <span className="map-pin pin-three">📍</span>
              <span className="bus-marker">🚌</span>
            </div>
            <div className="map-bottom">
              <div>
                <strong>Route 101</strong>
                <span>Guntur → Vijayawada</span>
              </div>
              <Link to="/tracking">View route ↗</Link>
            </div>
            <p className="map-disclaimer">
              Illustrative map — not live GPS data.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div>
          <strong>4</strong>
          <span>Demo bus routes</span>
        </div>
        <div>
          <strong>6</strong>
          <span>Demo bus stops</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Website access</span>
        </div>
      </section>

      <section className="section page-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT YOU CAN DO</span>
            <h2>Your journey, all in one place</h2>
          </div>
        </div>

        <div className="feature-grid">
          <Link to="/tracking" className="feature-card">
            <span className="feature-icon">📍</span>
            <h3>Bus Tracking</h3>
            <p>Search demo buses and view their route information.</p>
            <span className="card-link">Track a bus →</span>
          </Link>

          <Link to="/routes" className="feature-card">
            <span className="feature-icon">🛣️</span>
            <h3>Bus Routes</h3>
            <p>Explore routes, destinations and journey estimates.</p>
            <span className="card-link">Explore routes →</span>
          </Link>

          <Link to="/stops" className="feature-card">
            <span className="feature-icon">🚏</span>
            <h3>Bus Stops</h3>
            <p>Search the demo list of bus stops and locations.</p>
            <span className="card-link">Find stops →</span>
          </Link>
        </div>
      </section>

      <section className="section page-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">POPULAR JOURNEYS</span>
            <h2>Explore sample routes</h2>
          </div>
          <Link className="text-link" to="/routes">All routes →</Link>
        </div>

        <div className="route-grid">
          {popularRoutes.map((route) => (
            <article className="route-card" key={route.id}>
              <div className="route-card-top">
                <span className="bus-number">BUS {route.id}</span>
                <span className="status-pill">Demo route</span>
              </div>
              <h3>{route.from} → {route.to}</h3>
              <p>Via {route.via}</p>
              <div className="route-card-bottom">
                <span>◷ {route.time}</span>
                <Link to={`/tracking?bus=${route.id}`}>Details →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section page-container">
        <div>
          <h2>Ready to plan your journey?</h2>
          <p>Browse the available sample routes and bus stops.</p>
        </div>
        <Link className="button" to="/routes">Get Started →</Link>
      </section>
    </>
  );
}

export default Home;