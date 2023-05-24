import { Grid } from "@nextui-org/react";
import React from "react";
import { FavoritePokemonsCard } from "../pokemon";

interface Props {
  favoritePokemons: FavoritePokemon[];
}
interface FavoritePokemon {
  id: number;
  name: string;
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
