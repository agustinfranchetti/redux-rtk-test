import React from "react";
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPokemonDataQuery } from "./pokemonApi";

const Pokemon =(props) => {
    const [imageUrl, setImageUrl] = useState(null);

    const { data, isError, isLoading, isFetching } =  useGetPokemonDataQuery(props.name);
    // console.log(`Pokemon: ${props.name}`, data, isError, isLoading, isFetching )

    useEffect(() => {
        setImageUrl(data.sprites.front_default)
    }, []);

    return (
        <div className="pokeCard" style={{paddingTop: 10}}>
            <Card variant="outlined" sx={{maxWidth:380, marginLeft:"auto", marginRight:"auto"}}>
                <CardMedia
                    onClick={() => window.open(`https://www.pokemon.com/el/pokedex/${props.name}`)}
                    component="img"
                    height="200"
                    style={{objectFit:"contain"}}
                    image={imageUrl}
                    alt={`image ${props.name}`
                }
                />
                <CardContent>
                    <Typography variant="h4" >
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Pokemon;