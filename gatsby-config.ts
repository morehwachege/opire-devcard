import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Opire Dev Card`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
  pathPrefix: "/opire-devcard",
};

export default config;
