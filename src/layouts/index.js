import React from "react"
import PropTypes from "prop-types"
import ThemeProvider from '../styled/theme/themeProvider'
import Header from '../components/header/header'
import Footer from '../components/footer'
import Container from '../styled/components/container'
import GlobalStyle from '../styled/globalStyled'
import Particles from '../components/particles'

// Es la estrutura que siempre tendra mi portafolio
const Layout = ({ children, pageContext }) => {

  if (pageContext.layout === "Not found") {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </div>
    )
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Container>
          <Header />
          <Particles>
            <main className="container">
              {/* Es el contenido que cambia dependiendo del path */}
              {children}
            </main>
          </Particles>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout
