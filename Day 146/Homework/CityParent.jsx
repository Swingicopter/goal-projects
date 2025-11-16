import React from "react";

import CityComponent from "./CityComponent";

function CityParent() {
  return (
    <div>
      <CityComponent name="Emma" age={25} city="Paris" />
      <CityComponent name="Liam" age={30} city="Madrid" />
      <CityComponent name="Sophia" age={19} city="Tokyo" />
    </div>
  );
}

export default CityParent;