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
                fixed(width: 600, height: 600) {
                ...GatsbyImageSharpFixed
                }
            }
            }
            
        }
        `)

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mb-2">
            <Img style={{
                marginTop:"90px",
                borderRadius: "50%", width: "200px", height: "200px", border: "solid 5px white",
                boxShadow: "1px 0px 8px 5px rgba(0,0,0,0.3)"
            }}
                alt="Deiver Carrascal"
                fixed={avatar.file.childImageSharp.fixed} />
            <TitleAvatar className="title mt-2">Deiver Guerra Carrascal</TitleAvatar>
            <SubtitleAvatar className="subtitle">Est. Ing. de sistemas</SubtitleAvatar>
        </div>
    )
}