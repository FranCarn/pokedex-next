import React from "react";
import { SmallPokemon } from "../../interfaces";
import Image from "next/image";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/name/${pokemon.name}`);
  };
  const { name, id, img } = pokemon;
  return (
    <Grid key={id} xs={12} sm={4} md={3} xl={2} onClick={handleRedirect}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            alt={name}
            title={name}
            width="100%"
            height={150}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text># {id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
