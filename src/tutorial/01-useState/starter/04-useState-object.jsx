import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "name",
    age: 0,
    hobby: "hobby",
  });

  const displayPerson = () => {
    setPerson({
      name: "john",
      age: 25,
      hobby: "basketball",
    });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button className="btn" onClick={displayPerson}>
        Show Info
      </button>
    </>
  );
};

export default UseStateObject;
