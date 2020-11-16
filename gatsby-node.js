exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
  
    if (page.path.match(/404/)) {
      page.context.layout = "Not found"
      createPage(page)
    }
}

exports.createPages = async ({ actions, graphql}) => {
  const { createPage } = actions
  const postTemplate = require.resolve(`./src/templates/project-template.js`)


  const projects = await graphql(`
    query  {
      allStrapiProyectos {
        nodes {
          slug
        }
      }
    }
    `)

    projects.data.allStrapiProyectos.nodes.forEach((project) => {
      createPage({
        path: `proyectos/${project.slug}`,
        component: postTemplate,
        context: {
          slug: project.slug,
        },
      })
    })
    
}