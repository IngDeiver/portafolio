import React  from "react"
import PropTypes from "prop-types"
import ThemeProvider from '../styled/theme/themeProvider'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Container from '../styled/components/container'
import GlobalStyle from '../styled/globalStyled'
// import AppContext from '../context/appContext'

const Layout = ({ children }) => {
  

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider>
        <Header/>
          <Container>
            {children}
          </Container>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
