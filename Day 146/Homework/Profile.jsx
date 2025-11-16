import React from "react";

function Profile({ name, age, city, bgColor, hobby }) {
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
      <p>
        {hobby ? `Hobby: ${hobby}` : "No hobby listed"}
      </p>
    </div>
  );
}

export default Profile;