import React, { Fragment } from 'react'; 

const Person = (props ) => {
 
  return (
    <>
      {props.filteredData?.map((p) => (
        <React.Fragment key={p.id}>
          <p key={p.id}>
            {p.name} {p.number}
            <button onClick={() => props.handleDelete(p.id)}>delete</button>
          </p>
        
          </React.Fragment>
      ))}
    </>
  );
};
export default Person;
