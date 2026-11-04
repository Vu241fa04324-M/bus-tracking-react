import { useState } from "react";
import { Link } from "react-router-dom";

const routeData = [
  { id: 101, from: "Guntur", to: "Vijayawada", via: "Mangalagiri", time: "1 hr 15 min" },
  { id: 205, from: "Guntur", to: "Amaravati", via: "Pedakakani", time: "55 min" },
  { id: 310, from: "Guntur", to: "Tenali", via: "Namburu", time: "50 min" },
  { id: 412, from: "Vijayawada", to: "Mangalagiri", via: "Tadepalli", time: "40 min" },
];

function BusRoutes() {
  const [search, setSearch] = useState("");

  const filteredRoutes = routeData.filter((route) =>
    `${route.id} ${route.from} ${route.to} ${route.via}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="page-container page-section">
      <span className="eyebrow">ROUTE DIRECTORY</span>
      <h1>Explore bus routes</h1>
      <p className="page-intro">
        Find a route by bus number, starting point or destination.
      </p>

      <div className="search-form">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search routes or destinations..."
          aria-label="Search routes"
        />
        <button type="button" onClick={() => setSearch("")}>
          Clear
        </button>
      </div>

      <p className="results-count">
        {filteredRoutes.length} route(s) found
      </p>

      <div className="route-grid">
        {filteredRoutes.map((route) => (
          <article className="route-card" key={route.id}>
            <div className="route-card-top">
              <span className="bus-number">BUS {route.id}</span>
              <span className="status-pill">Demo route</span>
            </div>

            <h3>{route.from} → {route.to}</h3>
            <p>Via {route.via}</p>

            <div className="route-card-bottom">
              <span>◷ {route.time}</span>
              <Link to={`/tracking?bus=${route.id}`}>View details →</Link>
            </div>
          </article>
        ))}
      </div>

      {filteredRoutes.length === 0 && (
        <div className="empty-state">
          <h2>No routes found</h2>
          <p>Try a different bus number or destination.</p>
        </div>
      )}
    </section>
  );
}

export default BusRoutes;