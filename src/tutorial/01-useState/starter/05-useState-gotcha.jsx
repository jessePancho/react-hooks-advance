import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue(value + 1);
      return value;
    }, 5000);
    console.log(value);
  };

  // const handleClick = () => {
  //   setTimeout(() => {
  //     setValue((currentState) => {
  //       return currentState + 1;
  //     });
  //   }, 3000);
  // };
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
