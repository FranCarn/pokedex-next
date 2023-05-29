import Head from "next/head";
import React, { ReactNode } from "react";
import { Nabvar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  const getPathImgToMetaTag =
    typeof window === undefined ? "" : window.location.origin;
  return (
    <>
      <Head>
        <title>{title || "Pokémon App"}</title>
        <meta name="author" content="next-js-FranCarn" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <link
          rel="shortcut icon"
          href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1"
        />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`Informative page about ${title}`}
        />
        <meta
          property="og:image"
          content={`${getPathImgToMetaTag}/banner.png`}
        />
      </Head>
      <Nabvar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
