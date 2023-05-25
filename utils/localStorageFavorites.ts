import { FavoritePokemon } from "../interfaces";

interface Props {
  name: string;
  id: number;
}

const toggleFavorite = ({ name, id }: Props) => {
  let favorites: object[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (favorites.some((item: any) => item.name === name)) {
    favorites = favorites.filter((item: any) => item.name !== name);
  } else {
    favorites.push({ name, id });
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existPokemonInFavorites = (name: string): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: object[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.some((item: any) => item.name === name);
};

const pokemons = (): FavoritePokemon[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toggleFavorite, existPokemonInFavorites, pokemons };
