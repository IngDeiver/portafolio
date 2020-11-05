import React from 'react'
import Img from 'gatsby-image'
import {TitleAvatar, SubtitleAvatar} from '../styled/components/avatarItems'
import {useStaticQuery, graphql} from 'gatsby'



export default () => {
    const avatar = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "Deiver.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid
                }
            }
            }
            
        }
        `)

    return (
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
            <Img style={{
                borderRadius: "50%", width: "20%", height: "20%", border: "solid 5px white",
                boxShadow: "1px 0px 8px 5px rgba(0,0,0,0.3)"
            }}
                alt="Deiver Carrascal"
                fluid={avatar.file.childImageSharp.fluid} />
            <TitleAvatar className="title">Deiver Guerra Carrascal</TitleAvatar>
            <SubtitleAvatar className="subtitle">Est. Ing. de sistemas</SubtitleAvatar>
        </div>
    )
}