import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const buses = [
  {
    id: "101",
    from: "Guntur",
    to: "Vijayawada",
    via: "Mangalagiri",
    time: "1 hr 15 min",
    stops: ["Guntur Bus Station", "Mangalagiri", "Vijayawada Bus Station"],
  },
  {
    id: "205",
    from: "Guntur",
    to: "Amaravati",
    via: "Pedakakani",
    time: "55 min",
    stops: ["Guntur Bus Station", "Pedakakani"],
  },
  {
    id: "310",
    from: "Guntur",
    to: "Tenali",
    via: "Namburu",
    time: "50 min",
    stops: ["Guntur Bus Station", "Namburu"],
  },
  {
    id: "412",
    from: "Vijayawada",
    to: "Mangalagiri",
    via: "Tadepalli",
    time: "40 min",
    stops: ["Vijayawada Bus Station", "Tadepalli", "Mangalagiri"],
  },
];

function Tracking() {
  const [searchParams] = useSearchParams();
  const [busNumber, setBusNumber] = useState(
    searchParams.get("bus") || ""
  );
  const [selectedBus, setSelectedBus] = useState(null);
  const [message, setMessage] = useState("");

  function searchBus(event) {
    event.preventDefault();

    const found = buses.find(
      (bus) => bus.id === busNumber.trim()
    );

    setSelectedBus(found || null);
    setMessage(
      found
        ? ""
        : "Bus not found. Try 101, 205, 310 or 412."
    );
  }

  return (
    <section className="page-container page-section">
      <span className="eyebrow">BUS TRACKING</span>
      <h1>Find your bus</h1>
      <p className="page-intro">
        Enter a demo bus number to view its route and stops.
      </p>

      <form className="search-form tracking-search" onSubmit={searchBus}>
        <input
          value={busNumber}
          onChange={(event) => setBusNumber(event.target.value)}
          placeholder="Enter bus number"
          aria-label="Bus number"
        />
        <button type="submit">Search Bus</button>
      </form>

      {message && <p className="error-message">{message}</p>}

      {selectedBus && (
        <article className="tracking-card">
          <div className="tracking-card-header">
            <div>
              <span className="eyebrow">BUS DETAILS</span>
              <h2>Bus {selectedBus.id}</h2>
            </div>
            <span className="status-pill">Demo data</span>
          </div>

          <div className="journey-line">
            <div>
              <span className="journey-dot start-dot" />
              <span className="muted-label">STARTING POINT</span>
              <h3>{selectedBus.from}</h3>
            </div>
            <div className="journey-middle">
              <span>🚌</span>
              <span>{selectedBus.time}</span>
            </div>
            <div>
              <span className="journey-dot end-dot" />
              <span className="muted-label">DESTINATION</span>
              <h3>{selectedBus.to}</h3>
            </div>
          </div>

          <p><strong>Via:</strong> {selectedBus.via}</p>

          <h3>Route stops</h3>
          <ol className="stop-timeline">
            {selectedBus.stops.map((stop, index) => (
              <li key={stop}>
                <span className="timeline-number">{index + 1}</span>
                {stop}
              </li>
            ))}
          </ol>

          <p className="notice">
            This page displays sample route data, not a real-time GPS
            position or verified arrival time.
          </p>
        </article>
      )}

      {!selectedBus && !message && (
        <div className="empty-state">
          <span>🚌</span>
          <h2>Where is your bus going?</h2>
          <p>Search for bus 101, 205, 310 or 412 to begin.</p>
        </div>
      )}
    </section>
  );
}

export default Tracking;