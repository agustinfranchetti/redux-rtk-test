import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./counterSlice";
import { Button } from "@mui/material";
export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <h1> The count is: {count}</h1>
      <div className="incrementDecrementBtn" style={{marginBottom: 10}}>
        <Button variant="contained" color="error" onClick={() => dispatch(decrement())}>decrement</Button>
        <Button variant="contained" color="success" onClick={() => dispatch(increment())}>increment</Button>
      </div>
      <div className="incrementDecrementBtn">
        <Button variant="contained"  color="error" onClick={() => dispatch(decrementByAmount(10))}>
        Decrement by 10
        </Button>
        <Button variant="contained" color="success" onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </Button>
      </div>
    </div>
  );
}
