import React from "react";
import { useTheme, Text, Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { CSSProperties } from "@nextui-org/react/types/theme";

export const Nabvar = () => {
  const { theme } = useTheme();
  const nabvarStyles: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
    padding: "0 20px",
    backgroundColor: theme?.colors.gray100.value,
    marginBottom: "2rem",
  };

  return (
    <div style={nabvarStyles}>
      <NextLink href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            alt="logo"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png"
            width={60}
            height={60}
            draggable={false}
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </div>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};
