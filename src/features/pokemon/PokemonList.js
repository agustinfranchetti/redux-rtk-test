import React from "react";
import { useGetAllPokemonQuery } from "./pokemonApi";
import Pokemon from "./Pokemon";

export default function PokemonList() {
    const { data: pokemonListData, isError, isLoading, isFetching } = useGetAllPokemonQuery();
    // console.log(pokemonListData, isError, isLoading, isFetching)
    return (
        <div className="PokemonList">
            {pokemonListData && pokemonListData.results.map((pokemon) => (
                <Pokemon 
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                />
            ))}
        </div>
  );
}
