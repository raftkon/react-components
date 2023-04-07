import Button from "./Button";
import useCounter from "../hooks/use-counter";

const Counter = ({ initialCount }) => {
  const { counter, decrement, increment } = useCounter(initialCount);

  return (
    <div className="space-y-6">
      <span className="font-semibold text-lg">Counter is {counter}</span>
      <div className="flex space-x-4">
        <Button onClick={increment} secondary outline rounded>
          Increment
        </Button>
        <Button onClick={decrement} secondary outline rounded>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
