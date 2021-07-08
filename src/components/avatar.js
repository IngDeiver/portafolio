import React from "react"
import { TitleAvatar, SubtitleAvatar } from "../styled/components/avatarItems"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../styled/components/avatarContainer"
import Typed from "typed.js"

const options = {
  strings: ["JavaScript developer",
  "Backend developer",
  "Frontend developer",
  "Responsable",
  "Comprometido",
  "Autodidacta",
  "Ing. de sistemas e informática"],
  typeSpeed: 50,
  backSpeed: 50,
}

// Es mi foto con nombre y profesion
export default () => {
  const avatar = useStaticQuery(graphql`
    query avatar {
      strapiSobremis(id: { eq: "Sobremis_6001e9fdd06b8f54e53d0be6" }) {
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

  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, options)
    return () => {
      typed.current.destroy()
    }
  }, [])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-2">
      <Avatar
        alt="Deiver Carrascal"
        fluid={avatar.strapiSobremis?.avatar?.childImageSharp?.fluid}
      />
      <TitleAvatar className="title mt-2 text-center">
        Deiver Guerra Carrascal
      </TitleAvatar>
      <div style={{ height: 30}} className="d-flex flex-row justify-content-center align-items-center mb-2">
        <SubtitleAvatar
          style={{ whiteSpace: "pre"}}
          ref={el}
          className="subtitle text-center"
        />
      </div>
    </div>
  )
}
