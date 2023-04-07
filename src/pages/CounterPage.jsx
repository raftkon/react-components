import React, { useReducer } from "react";
import produce from "immer";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "changeValueToAdd";
const ADD_VALUE_TO_COUNT = "addValueToCount";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const { count, valueToAdd } = state;

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="m-3 w-[50%]">
      <h1 className="font-semibold mb-4 text-lg">Count is {count}</h1>
      <div className="flex space-x-5">
        <Button onClick={increment} secondary rounded outline>
          Increment
        </Button>
        <Button onClick={decrement} secondary rounded outline>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={valueToAdd || ""}
          onChange={handleChange}
        />
        <Button secondary rounded outline>
          Add it!
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
