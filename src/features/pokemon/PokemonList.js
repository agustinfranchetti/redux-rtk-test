import React from "react";
import { useGetAllPokemonQuery, useGetPokemonByIdMutation } from "./pokemonApi";
import Pokemon from "./Pokemon";

export default function PokemonList() {
    const { data } = useGetAllPokemonQuery();
    console.log(data)
    return (
        <div className="PokemonList">
            {data.results.map((pokemon) => (
                <Pokemon 
                    name={pokemon.name}
                    url={pokemon.url}
                />
            ))}
        </div>
  );
}
