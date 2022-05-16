import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import BoxWidth from "./features/boxWidth/BoxWidth";
import PokemonList from "./features/pokemon/PokemonList";
// import PokemonById from "./features/pokemon/PokemonById";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <BoxWidth />
      <PokemonList />
    </div>
  );
}
