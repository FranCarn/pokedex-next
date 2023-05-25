import { Grid, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  name: string;
  id: number;
}

export const FavoritePokemonsCard = ({ name, id }: Props) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={12} sm={4} md={3} xl={2}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onClick={handleRedirect}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100 %"}
          height={150}
        />
        <Card.Footer>
          <Text css={{ textTransform: "capitalize", marginLeft: "70%" }}>
            {name}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
