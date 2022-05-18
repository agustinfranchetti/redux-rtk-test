import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://pokeapi.co/api/v2"
    }),
    //TODO: ver post processing para sacar el .results
    //TODO ver ''tags'' -> invalidan ciertas llamadas o asignan tagas a ciertas llamadas
    endpoints: (builder) => ({
        getAllPokemon: builder.query({
          query: () => "/pokemon/?limit=9"
        }),
        getPokemonData: builder.query({
          query: (pokemonName) => `/pokemon/${pokemonName}`
        }),
      })
  });
  
export const {useGetAllPokemonQuery, useGetPokemonDataQuery} = pokemonApi;
