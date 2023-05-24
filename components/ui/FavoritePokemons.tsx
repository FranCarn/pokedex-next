import { Grid } from "@nextui-org/react";
import React from "react";
import { FavoritePokemonsCard } from "../pokemon";
import { FavoritePokemon } from "../../interfaces";

interface Props {
  favoritePokemons: FavoritePokemon[];
}

export const FavoritePokemons = ({ favoritePokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((item) => (
        <FavoritePokemonsCard key={item.id} name={item.name} id={item.id} />
      ))}
    </Grid.Container>
  );
};
