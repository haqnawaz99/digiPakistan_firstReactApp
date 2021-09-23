import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Counter </button>
    </div>
  );
};

export default Counter;
