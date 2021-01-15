import React from 'react'
import {TitleAvatar, SubtitleAvatar} from '../styled/components/avatarItems'
import {useStaticQuery, graphql} from 'gatsby'
import Avatar from '../styled/components/avatarContainer'


// Es mi foto con nombre y profesion
export default () => {
    const avatar = useStaticQuery(graphql`
        query avatar {
            strapiSobremis(id: {eq: "Sobremis_6001e9fdd06b8f54e53d0be6"}) {
                avatar {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
            }
        }
    `)

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mb-2">
            <Avatar
                alt="Deiver Carrascal"
                fluid={avatar.strapiSobremis?.avatar?.childImageSharp?.fluid} />
            <TitleAvatar className="title mt-2 text-center">Deiver Guerra Carrascal</TitleAvatar>
            <SubtitleAvatar className="subtitle text-center">Est. Ing. de sistemas</SubtitleAvatar>
        </div>
    )
}