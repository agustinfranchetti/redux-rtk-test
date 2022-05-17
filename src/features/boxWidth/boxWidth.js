import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { widthIncrease, widthDecrease} from "./boxWidthSlice";
import { Button } from "@mui/material";

export default function BoxWidth() {
  const { width } = useSelector((state) => state.boxWidth);
  const dispatch = useDispatch();
  return (
    <div className="BoxWidth">
      <div class="square" style={{width: width + '%'}}>
        <p class="text" >El width es {width}</p>
      </div >
      <div className="incrementDecrementBtn">
        <Button variant="outlined" color="error" onClick={() => dispatch(widthDecrease())}>decrement</Button>
        <Button variant="outlined"  color="success" onClick={() => dispatch(widthIncrease())}>increment</Button>
      </div>
    </div>
  );
}
