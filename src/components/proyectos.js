import React from 'react'
import Grid from '../styled/components/gridProjects'
import SEO from './seo'
import ContainerImageProject from '../styled/components/containerProject'
import { graphql, useStaticQuery } from 'gatsby'
import ImageProject from '../styled/components/imageProject'
import Overflow from '../styled/components/overflowProjectImage'
import Link from '../styled/components/linkProjectContainer'
import sections from './sidebar/sections'
import getTitleSection from './sidebar/getTitleSection'
import Sidebar from './sidebar/Sidebar'
import Fade from 'react-reveal/Fade';
import SectionTitle from '../styled/components/sectionTitle'
import TextContainer from '../styled/components/pContainer'

export default () => {

    const projects = useStaticQuery(graphql`
    query {
        allStrapiProyectos{
        nodes{
            titulo
            descripcion
            slug
            categoria {
                nombre
            }
            imagen {
                childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
        }
    }`);

    return (
        <>
            <SEO title="Proyectos" />
            <Grid>
                <Sidebar />
                <Fade>
                    <div style={{ marginTop: "90px" }} className="content">
                        {sections.map((section, i) => (
                            <section key={i} id={section}>
                                <div className="d-flex justify-content-center">
                                    <SectionTitle>{getTitleSection(section)}</SectionTitle>
                                </div>
                                {projects.allStrapiProyectos?.nodes?.filter(p => p.categoria.nombre === section).length !== 0 ?
                                    projects.allStrapiProyectos?.nodes?.filter(p => p.categoria.nombre === section).map((proyecto, i) => (
                                        <Link key={i} to={`/proyectos/${proyecto.slug}`}>
                                            <ContainerImageProject key={i + 1} className="text-center">
                                                <ImageProject className="img-fluid" fluid={proyecto.imagen?.childImageSharp?.fluid} />
                                                <Overflow className="overflow d-flex flex-column justify-content-center">
                                                    <h4 className="subtitle mx-2 my-2">{proyecto.titulo}</h4>
                                                </Overflow>
                                            </ContainerImageProject>
                                        </Link>
                                    )) : (<TextContainer className="text-center my-3">
                                        <p>Aún no hay proyectos de este tipo, me estoy preparando <span role="img" aria-label="smiles">😅😃</span></p>
                                    </TextContainer>)}
                            </section>
                        ))}
                    </div>
                </Fade>
            </Grid>
        </>
    )
}