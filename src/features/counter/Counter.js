import { render } from "@testing-library/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
