import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://pokeapi.co/api/v2"
    }),
    endpoints: (builder) => ({
        getAllPokemon: builder.query({
          query: () => "/pokemon/?limit=10"
        }),
        getPokemonData: builder.query({
          query: (pokemonName) => `/pokemon/${pokemonName}`
        }),
      })
  });
  
export const {useGetAllPokemonQuery, useGetPokemonDataQuery} = pokemonApi;
