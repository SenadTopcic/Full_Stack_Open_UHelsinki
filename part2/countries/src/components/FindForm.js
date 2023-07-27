import React from "react";

const FindForm = (props) => {

  return (
    <form>
      <label>
        Find Countries {" : "}
        <input
          value={props.countryName}
          onChange={(e) => props.handleFindCountry(e)}
        />
      </label>
    </form>
  );
};

export default FindForm;
