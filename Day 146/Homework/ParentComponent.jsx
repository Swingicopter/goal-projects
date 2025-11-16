import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <ChildComponent
        name="Alice"
        age={32}
        city="Paris"
        bgColor="lightblue"
      />

      <ChildComponent
        name="Bob"
        age={22}
        city="Tokyo"
        bgColor="lightcoral"
      />
    </div>
  );
}

export default ParentComponent;