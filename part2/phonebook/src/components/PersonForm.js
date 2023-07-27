import { useState } from "react";

const PersonForm = (props) => {

  return (
    <form onSubmit={(e) => props.submitData(e)}>
      <div>
        name: <input value={props.newInput.name} name="name" onChange={(e) => props.handleInput(e)} />
      </div>
      <div>
        number:{" "}
        <input value={props.newInput.number} name="number" onChange={(e) => props.handleInput(e)} />
      </div>
      <button type="submit">add</button>
    </form>
  );
};
export default PersonForm;
