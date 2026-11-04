import { useState } from "react";

const stopData = [
  { id: 1, name: "Guntur Bus Station", city: "Guntur", routes: "101, 205, 310" },
  { id: 2, name: "Mangalagiri", city: "Mangalagiri", routes: "101, 412" },
  { id: 3, name: "Vijayawada Bus Station", city: "Vijayawada", routes: "101, 412" },
  { id: 4, name: "Pedakakani", city: "Pedakakani", routes: "205" },
  { id: 5, name: "Namburu", city: "Namburu", routes: "310" },
  { id: 6, name: "Tadepalli", city: "Tadepalli", routes: "412" },
];

function Stops() {
  const [search, setSearch] = useState("");

  const filteredStops = stopData.filter((stop) =>
    `${stop.name} ${stop.city} ${stop.routes}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="page-container page-section">
      <span className="eyebrow">STOP DIRECTORY</span>
      <h1>Find bus stops</h1>
      <p className="page-intro">
        Search the sample stop directory by name or city.
      </p>

      <div className="search-form">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search bus stops..."
          aria-label="Search bus stops"
        />
        <button type="button" onClick={() => setSearch("")}>
          Clear
        </button>
      </div>

      <div className="stop-grid">
        {filteredStops.map((stop) => (
          <article className="stop-card" key={stop.id}>
            <span className="stop-icon">🚏</span>
            <div>
              <h3>{stop.name}</h3>
              <p>{stop.city}</p>
              <span className="stop-routes">Routes: {stop.routes}</span>
            </div>
          </article>
        ))}
      </div>

      {filteredStops.length === 0 && (
        <div className="empty-state">
          <h2>No stops found</h2>
          <p>Try another stop name or city.</p>
        </div>
      )}
    </section>
  );
}

export default Stops;