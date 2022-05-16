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
        getPokemonById: builder.mutation({
          query: ({ id, ...rest }) => ({
            url: `/pokemon/${id}`,
            method: "GET",
            body: rest
          })
        }),
      })
  });
  
export const {useGetAllPokemonQuery, useGetPokemonByIdMutation} = pokemonApi;
