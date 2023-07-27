import { useState, useEffect } from "react";

import PersonForm from "./components/PersonForm";
import Person from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import axios from "axios";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [newInput, setNewInput] = useState({ name: "", number: "" });
  const [noticeMessage, setNoticeMessage] = useState(null);
  const [missingMessage, setMissingMessage] = useState(null);

  //initialisation
  useEffect(() => {
    personsService.getData().then((res) => setPersons(res));
  }, [newInput]);

  //create array of searched data
  const filteredData = persons?.filter((person) => {
    return person.name.toLowerCase().includes(searchName.toLowerCase());
  });

  //handle search
  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  //handle inputs number and name
  const handleInput = (event) => {
    setNewInput({ ...newInput, [event.target.name]: event.target.value });
  };

  //submit data and prevent doubles and empty name
  const submitData = (event) => {
    event.preventDefault();
    if (isPresent()) {
      if (newInput.name.length !== 0) {
        personsService.postData(newInput).then((res) => {
          setPersons(persons.concat(res));
          setNoticeMessage(`Added ${newInput.name}`);
          setNewInput({ name: "", number: "" });
        });
      } else window.alert("Can't be empty name");
    }
  };

  //check for double and present values
  const isPresent = () => {
    let tmpPersons = [...persons];
    let tmpName = newInput.name;
    let message = tmpName + " is already added to phonebook";
    for (let index = 0; index < tmpPersons.length; index++) {
      if (
        JSON.stringify(tmpName.toLowerCase()) ===
        JSON.stringify(tmpPersons[index].name).toLowerCase()
      ) {
        if (
          window.confirm(`${message}, replace the old number with a new one`)
        ) {
          personsService
            .putData(tmpPersons[index].id, newInput)
            .then((res) => {
              const updatedPersons = tmpPersons.map((person) =>
                person.id === res.id ? res : person
              );
              setNoticeMessage(`Added ${newInput.name}`);
              setPersons(updatedPersons);
            })
            .catch((error) =>
              setMissingMessage(
                `Information of ${newInput.name} has already removed from server`
              )
            );
          return false;
        } else return false;
      }
    }
    return true;
  };

  //delete current number
  const handleDelete = (id) => {
    const tmpPersons = [...persons];
    let tmpName = tmpPersons.filter((p) => id === p.id)[0].name;
    let message = `Delete ${tmpName}`;

    if (window.confirm(message)) {
      personsService
        .deleteData(id)
        .then(() => {
          setPersons(tmpPersons.filter((p) => p.id !== id));
        })
        .catch((error) =>
          setMissingMessage(
            `Information of ${tmpName} has already removed from server`
          )
        );
    }
  };

  //handle timer
  useEffect(() => {
    let noticeTimer;
    let missingTimer;

    if (noticeMessage) {
      noticeTimer = setTimeout(() => {
        setNoticeMessage(null);
      }, 5000);
    }

    if (missingMessage) {
      missingTimer = setTimeout(() => {
        setMissingMessage(null);
      }, 5000);
    }

    return () => {
      clearTimeout(noticeTimer);
      clearTimeout(missingTimer);
    };
  }, [noticeMessage, missingMessage]);

console.log(noticeMessage, missingMessage)
  return (
    <div>
      <h2>Phonebook</h2>
      {noticeMessage && <Notification msg={noticeMessage} />}
      {missingMessage && <Notification msg={missingMessage} color="red" />}
      <Filter
        handleSearchName={handleSearchName}
        searchName={searchName}
      ></Filter>
      <h2>add a new</h2>
      <PersonForm
        submitData={submitData}
        handleInput={handleInput}
        newInput={newInput}
      />
      <h2>Numbers</h2>
      <Person filteredData={filteredData} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
