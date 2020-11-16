import React  from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../styled/components/logo'

export default () => {
    
const { logoWhite} = useStaticQuery(graphql`
    query {
    logoWhite:file(relativePath: { eq: "Logo white.png" }) {
        childImageSharp {
            fixed {
            ...GatsbyImageSharpFixed
            }
        }
    } 
    }
    `)



    return (
        <div className="col-4 col-sm-8 col-md-8 col-lg-4 col-xl-4 
                        d-flex  justify-content-center mt-md-auto mb-md-auto justify-content-sm-center justify-content-md-start justify-content-lg-end justify-content-xl-end ">
            <Logo className="img-fluid" src={logoWhite.childImageSharp.fixed.src}/>
        </div>
    )
}