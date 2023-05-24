import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { FavoritePokemonsCard } from "../pokemon";

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemons = ({ favoritePokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <FavoritePokemonsCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
