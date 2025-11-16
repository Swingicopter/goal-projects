import React from "react";

function ChildComponent({ name, age, city, bgColor }) {
  const style = {
    backgroundColor: bgColor,
    padding: "14px",
    borderRadius: "10px",
    marginBottom: "12px",
  };

  return (
    <div style={style}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>{age >= 30 ? "Experienced" : "Young"}</p>
    </div>
  );
}

export default ChildComponent;