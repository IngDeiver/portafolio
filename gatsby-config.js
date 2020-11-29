module.exports = {
  pathPrefix: "/portafolio",
  siteMetadata: {
    title: `Portafolio Deiver Carrascal`,
    description: `Hola!, soy Deiver, este es mi portafolio, creado para dar a conocer mis habilidades como futuro
    desarrollador e ingeniero de sistemas.`,
    author: `@deiver`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo black.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Condensed\:300,400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`contactos`, `sobremis`, `categorias`, `proyectos`, `tecnologias`]
      },
      loginData: {
        identifier: "ingendeiver@gmail.com",
        password: "DEIBERandres1",
      }
    },
  ],
}
