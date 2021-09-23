import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Counter </button>
      <p></p>
      <button onClick={props.hideCounter}>Increment Counter </button>
    </div>
  );
};

export default Counter;
