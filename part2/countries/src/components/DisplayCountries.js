import React from "react";

const DisplayCountries = ({ countries, handleShow }) => {
  return (
    <>
      {countries.length === 0 ? (
        <p>No matches</p>
      ) : countries.length === 1 ? (
        handleShow(countries[0],true)
      ) : countries.length < 11 ? (
        countries.map((country, index) => (
          
          <React.Fragment key={index}>
            <p>
              {country.name.common}{" "}
              <button onClick={() => handleShow(country, true)}>Show</button>
            </p>
          </React.Fragment>
        ))
      ) : (
        <p>To Many matches, specify another filter</p>
      )}
    </>
  );
};

export default DisplayCountries;
