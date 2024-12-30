import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Opire Dev Card`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"],
  pathPrefix: "/opire-devcard",
};

export default config;
