import React from "react";
import { useGetAllPokemonQuery } from "./pokemonApi";
import Pokemon from "./Pokemon";

export default function PokemonList() {
    const { data, isError, isLoading, isFetching } = useGetAllPokemonQuery();
    // console.log(data, isError, isLoading, isFetching)
    return (
        <div className="PokemonList">
            {data && data.results.map((pokemon) => (
                <Pokemon 
                    name={pokemon.name}
                    url={pokemon.url}
                />
            ))}
        </div>
  );
}
