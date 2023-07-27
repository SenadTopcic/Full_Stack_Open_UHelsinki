import { useEffect, useState } from "react";
import "./App.css";
import FindForm from "./components/FindForm";
import DisplayCountries from "./components/DisplayCountries";
import axios from "axios";
import DisplayOneCountry from "./components/DisplayOneCountry";

const App = () => {
  const [findCountryName, setFindCountryName] = useState("");
  const [fetchCountries, setFetchCountries] = useState(null);
  const [showCountry, setShowCountry] = useState(null);
  const [displayData, setDisplayData] = useState(false);
  const [parameterChangedCount, setParameterChangedCount] = useState(0);

  const urlSite = `https://studies.cs.helsinki.fi/restcountries/api/all`;

  //When find country set parameter to 1 and reset display
  //Reset the displayed country when search input changes
  //Reset displayData when search input changes
  const handleFindCountry = (event) => {
    setFindCountryName(event.target.value);

    setParameterChangedCount(1);
    setShowCountry(null);
    setDisplayData(false);
  };

  useEffect(() => {
    axios.get(urlSite).then((res) => setFetchCountries(res.data));
  }, []);

  // Reset the displayed country and displayData when parameterChangedCount changes
  useEffect(() => {
    setShowCountry(null);
    setDisplayData(false);
  }, [parameterChangedCount]);

  //create array of searched data
  const filteredData = fetchCountries?.filter((contry) => {
    return contry.name.common
      .toLowerCase()
      .includes(findCountryName.toLowerCase());
  });

  //console.log("fd", filteredData);
  //show curent country
  const handleShow = (data, cond) => {
    setDisplayData(cond);
    setShowCountry(data);
  };
  return (
    <div className="App">
      <FindForm
        handleFindCountry={handleFindCountry}
        countryName={findCountryName}
      />
      {fetchCountries && (
        <DisplayCountries
          countries={filteredData}
          handleShow={handleShow}
          parameterChangedCount={parameterChangedCount}
        />
      )}
      {showCountry && displayData && (
        <DisplayOneCountry showCountry={showCountry} />
      )}
    </div>
  );
};

export default App;
