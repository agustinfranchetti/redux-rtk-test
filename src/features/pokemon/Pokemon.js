import React from "react";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { useGetPokemonDataQuery } from "./pokemonApi";

const Pokemon =({name, ...props}) => {
    const { data: pokemonData, isError, isLoading, isFetching } =  useGetPokemonDataQuery(name);

    const showData = pokemonData && !isError && !isFetching && !isLoading
    // console.log("showdata", {pokemonData, isError, isFetching, isLoading, name})
    return (
        showData &&
        <div className="pokeCard" style={{paddingTop: 10}}>
            <Card variant="outlined" sx={{maxWidth:380, marginLeft:"auto", marginRight:"auto"}}>
                <CardMedia
                    onClick={() => window.open(`https://www.pokemon.com/el/pokedex/${name}`)}
                    component="img"
                    height="200"
                    style={{objectFit:"contain"}}
                    image={pokemonData.sprites.front_default}
                    alt={`image ${name}`
                }
                />
                <CardContent>
                    <Typography variant="h4" >
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Pokemon;