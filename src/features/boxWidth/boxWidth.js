import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { widthIncrease, widthDecrease} from "./boxWidthSlice";

export default function BoxWidth() {
  const { width } = useSelector((state) => state.boxWidth);
  const dispatch = useDispatch();
  return (
    <div className="BoxWidth">
      <div class="square" style={{width: width + '%'}}>
        <p class="text" >El width es {width}</p>
      </div>
        <button onClick={() => dispatch(widthIncrease())}>increment</button>
        <button onClick={() => dispatch(widthDecrease())}>decrement</button>
    </div>
  );
}
