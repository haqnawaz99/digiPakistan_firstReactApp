import { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  //component did mount
  useEffect(() => {
    console.log("Executing effect on mountng");
  }, []);
  //[count]); list of variables will be given
  useEffect(() => {
    console.log("Executing effect on updating");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Executing effect on Unmount");
    };
  }, []);

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
