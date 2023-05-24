import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import NextLink from "next/link";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";

import { pokeApi } from "../../../api";
import { Layout } from "../../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../../interfaces";
import { localFavorites } from "../../../utils";
import { useState } from "react";

interface Props {
  pokemon: Pokemon;
}
const confettiOptions = {
  zIndex: 999,
  particleCount: 100,
  spread: 160,
  angle: -100,
  origin: {
    x: 0.92,
    y: 0.1,
  },
};

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    localFavorites.existPokemonInFavorites(pokemon.id)
  );
  const handleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);
    if (isFavorite) return;
    confetti(confettiOptions);
  };
  const titleOfPage = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  return (
    <Layout title={titleOfPage}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Grid css={{ display: "flex", gap: "$10" }}>
                <Button color="gradient" ghost>
                  <NextLink href="/">Volver</NextLink>
                </Button>
                <Button
                  onPress={handleFavorite}
                  color="gradient"
                  bordered={!isFavorite}
                >
                  Favoritos
                </Button>
              </Grid>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
  const pokemon = { name: data.name, id: data.id, sprites: data.sprites };

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
