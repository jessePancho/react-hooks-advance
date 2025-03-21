import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleCntLess = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleCount}>
        Increment
      </button>
      <button type="button" className="btn" onClick={handleCntLess}>
        Decrement
      </button>
    </>
  );
};

export default UseStateBasics;
