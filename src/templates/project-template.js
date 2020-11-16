import React from "react"
import { graphql } from "gatsby"
import ContainerDetailProyect from '../styled/components/containerDetailProject'
import ImageProject from '../styled/components/imageDetailProject'
import DetailProjectOverflow from '../styled/components/detaiProjectOverflow'
import BtnOption from '../styled/components/btnOptionDetailProject'
import TextContainer from '../styled/components/pContainer'
import SEO from '../components/seo'
import Tecnologia from '../components/tecnologia'
import Fade from 'react-reveal/Fade';
import H1 from '../styled/components/h1404TextContainer'
import OverflowContainer from '../styled/components/detailProjectOverflowContainer'
import Logo from '../components/logoOverflowDetailProject'
import BtnDetailProjectContainer from '../styled/components/btnDetailProjectContainer'

export default ({ data }) => {

  
  return (
    <>
      <SEO title={`Proyecto | ${data.strapiProyectos.titulo}`} />
      <Fade>
        <ContainerDetailProyect className="d-flex justify-content-center my-5 mx-3 ">
          <div>
            <OverflowContainer>
              <ImageProject fluid={data.strapiProyectos.imagen.childImageSharp.fluid} />
              <DetailProjectOverflow className="overflow d-flex align-items-center justify-content-center">
                  <Logo/>
                  {/* Botones */}
                  <div className="d-flex flex-column mr-5">
                    {data.strapiProyectos.url && <BtnOption target="_blank" href={data.strapiProyectos.url} rel="noreferrer" className="my-2">Visitar</BtnOption>}
                    {data.strapiProyectos.repositorio && <BtnOption target="_blank" href={data.strapiProyectos.repositorio} rel="noreferrer" className="my-2">Repositorio</BtnOption>}
                    {data.strapiProyectos.video &&  <BtnOption target="_blank" href={data.strapiProyectos.video} rel="noreferrer"className="my-2">Video</BtnOption> }
                  </div>
              </DetailProjectOverflow>
            </OverflowContainer>
            <TextContainer style={{marginLeft:"20px"}} className="my-3">
              <Fade bottom>
                <H1 className="title my-3">{data.strapiProyectos.titulo}</H1>
                <p style={{ textAlign: "justify" }}>{data.strapiProyectos.descripcion}</p>
              </Fade>
              <Fade bottom>
                <h2 className="subtitle mt-2">Tecnologias</h2>
                <div className="d-flex row justify-content-start  mt-3">
                  <div  style={{marginLeft:"5px"}} className="d-flex row justify-content-around">
                  {data.strapiProyectos.tecnologias.map((tec, i) => (
                   <div key={i+1} className="col">
                      <Tecnologia key={i} imagen={tec.imagen.childImageSharp.fixed} titulo={tec.titulo} />
                    </div>
                  ))}
                  </div>
                </div>
              </Fade>
            </TextContainer>
            <Fade bottom>
              <BtnDetailProjectContainer className="d-flex flex-column justify-content-center align-items-center
                                          flex-sm-column justify-content-sm-center align-items-sm-center
                                          flex-md-row justify-content-md-start
                                          flex-lg-row justify-content-lg-start
                                          flex-xl-row justify-content-xl-start
                                          d-lg-none .d-xl-block d-xl-none">
                      {data.strapiProyectos.url && <BtnOption target="_blank" href={data.strapiProyectos.url} rel="noreferrer" className="my-2 mr-4">Visitar</BtnOption>}
                      {data.strapiProyectos.repositorio && <BtnOption target="_blank" href={data.strapiProyectos.repositorio} rel="noreferrer" className="mr-4">Repositorio</BtnOption>}
                      {data.strapiProyectos.video &&  <BtnOption target="_blank" href={data.strapiProyectos.video} rel="noreferrer"className="my-2 mr-4">Video</BtnOption> }
              </BtnDetailProjectContainer>
            </Fade>
          </div>
        </ContainerDetailProyect>
      </Fade>

    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    strapiProyectos(slug: {eq: $slug}){
          titulo
          descripcion
          repositorio
          video
          url
          imagen {
            childImageSharp{
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
          }
          tecnologias {
            titulo
            imagen {
                childImageSharp{
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
          }
    }
  }
`