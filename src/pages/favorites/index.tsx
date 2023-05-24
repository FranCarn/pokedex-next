import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/layouts";
import { FavoritePokemons, NotFound } from "../../../components";
import { localFavorites } from "../../../utils";
import { FavoritePokemon } from "../../../interfaces";

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<FavoritePokemon[]>(
    []
  );

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {!favoritePokemons.length ? (
        <NotFound title="Doesn't have favorites yet!" />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
