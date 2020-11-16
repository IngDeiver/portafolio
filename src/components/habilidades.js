import React from 'react'
import Grid from '../styled/components/gridProjects'
import SEO from './seo'
import sections from './sidebar/sections'
import getTitleSection from './sidebar/getTitleSection'
import Sidebar from './sidebar/Sidebar'
import Fade from 'react-reveal/Fade';
import SectionTitle from '../styled/components/sectionTitle'
import TextContainer from '../styled/components/pContainer'
import CardSkill from '../styled/components/cardSkillContainer'
import ImageSkill from '../styled/components/imageSkill'
import { graphql, useStaticQuery } from 'gatsby'
import Skilloverflow from '../styled/components/skillOverflow'


export default () => {

    const skills = useStaticQuery(graphql`
    query {
        allStrapiTecnologias{
        nodes{
            titulo
            descripcion
            categoria{
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
                                <div className={`d-flex justify-content-center ${section !== "web"  ? "mt-3" : ""}`}>
                                    <SectionTitle>{getTitleSection(section)}</SectionTitle>
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    {skills.allStrapiTecnologias?.nodes?.filter(s => s.categoria.nombre === section).length !== 0 ?
                                    skills.allStrapiTecnologias?.nodes?.filter(s => s.categoria.nombre === section).map((skill, i) => (
                                       <CardSkill key={i} className="d-flex flex-column align-items-center justify-content-center 
                                                                    mx-2 my-2 col-8 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                           <ImageSkill alt={skill.titulo} fluid={skill.imagen?.childImageSharp?.fluid}/>
                                            <TextContainer className="subtitle text-center mx-5 my-3">
                                                <p>
                                                    {skill.titulo}
                                                </p>
                                            </TextContainer>
                                            <Skilloverflow className="overflow">
                                                <p className="text-center mx-2 my-2 ">
                                                    {skill.descripcion}
                                                </p>
                                            </Skilloverflow>
                                       </CardSkill> 
                                    )) : (<TextContainer className="d-flex justify-content-center my-3">
                                        <p>
                                        Aún no hay proyectos de este tipo, me estoy preparando <span className="ml-2" role="img" aria-label="smiles">😅😃</span>
                                        </p>
                                    </TextContainer>)}
                                </div>
                            </section>
                        ))}
                    </div>
                </Fade>
            </Grid>
        </>
    )
}