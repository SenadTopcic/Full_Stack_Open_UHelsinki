import React from "react";
import Weather from "./Weather";

const DisplayOneCountry = ({ showCountry }) => {
  let lang = Object.values(showCountry.languages);

  return (
    <div>
      <h1>{showCountry.name.common}</h1>
      <p>capital {showCountry.capital}</p>
      <p>area {showCountry.area}</p>
      <h4>
        language{" "}
        {lang.map((l, index) => (
          <li key={index}>{l}</li>
        ))}
      </h4>
      <img
        src={showCountry.flags.svg}
        alt={showCountry.name.common}
        width="100px"
      />
      <Weather town={showCountry.capital} />
    </div>
  );
};

export default DisplayOneCountry;
