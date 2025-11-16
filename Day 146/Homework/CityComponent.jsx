import React from "react";

function CityComponent({ name, age, city }) {
  const greeting = city === "Paris" ? "Bonjour!" : "Hello!";

  return (
    <div style={{ padding: "12px", border: "1px solid #ccc", marginBottom: "10px" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>
        City: {city} — <strong>{greeting}</strong>
      </p>
    </div>
  );
}

export default CityComponent;