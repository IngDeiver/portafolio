exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
  
    if (page.path.match(/404/)) {
      page.context.layout = "Not found"
      createPage(page)
    }
  }