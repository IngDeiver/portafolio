import React from 'react'
import Img from 'gatsby-image'
import {TitleAvatar, SubtitleAvatar} from '../styled/components/avatarItems'
import {useStaticQuery, graphql} from 'gatsby'

// Es mi foto con nombre y profesion

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
        <div className="d-flex flex-column justify-content-center align-items-center mb-2">
            <Img style={{
                marginTop:"90px",
                borderRadius: "50%", width: "15%", height: "15%", border: "solid 5px white",
                boxShadow: "1px 0px 8px 5px rgba(0,0,0,0.3)"
            }}
                alt="Deiver Carrascal"
                fluid={avatar.file.childImageSharp.fluid} />
            <TitleAvatar className="title mt-2">Deiver Guerra Carrascal</TitleAvatar>
            <SubtitleAvatar className="subtitle">Est. Ing. de sistemas</SubtitleAvatar>
        </div>
    )
}