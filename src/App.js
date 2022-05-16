import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import BoxWidth from "./features/boxWidth/BoxWidth";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <BoxWidth />
    </div>
  );
}
