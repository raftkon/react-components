import { useEffect, useState } from "react";

function useCounter(initialCount) {
  const [counter, setCounter] = useState(initialCount);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return { counter, increment, decrement };
}
export default useCounter;
