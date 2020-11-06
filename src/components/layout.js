import React  from "react"
import PropTypes from "prop-types"
import ThemeProvider from '../styled/theme/themeProvider'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Container from '../styled/components/container'
import GlobalStyle from '../styled/globalStyled'


// Es la estrutura que siempre tendra mi portafolio
const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyle/>
      <ThemeProvider>
        <Container>
            <Header/>
            <main  className="container">
                {/* Es el contenido que cambia dependiendo del path */}
                {children}
            </main>
            <Footer/>
        </Container>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
