import React from "react";
import { Container, Image, Text } from "@nextui-org/react";

interface Props {
  title: string;
}
export const NotFound = ({ title }: Props) => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>{title}</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg"
        alt="logo"
        width="250"
        height="250"
        css={{
          opacity: 0.2,
        }}
      />
    </Container>
  );
};
