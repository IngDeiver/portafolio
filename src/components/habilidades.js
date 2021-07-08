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
import { graphql, StaticQuery } from 'gatsby'
import Skilloverflow from '../styled/components/skillOverflow'

export default () => (<StaticQuery
    query={graphql`
    query {
        allStrapiTecnologias{
        nodes {
            titulo
            descripcion
            categorias {
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
    }`}
    
    render={skills => (
        <>
            <SEO title="Proyectos" />
            <Grid>
                <Sidebar haveMain haveSecundary />
                <Fade>
                    <div style={{ marginTop: "80px" }} className="content">
                        <section id="main" >
                            <div className={`d-flex justify-content-center mt-3`}>
                                <SectionTitle>Tecnologías principales</SectionTitle>
                            </div>
                            <TextContainer className="text-center mx-5">
                                   <p> 
                                       En esta sección están las habilidades técnicas que uso comunmente para implementar
                                       soluciones y sobre las cuales tengo mayor conocimiento y experiencia.
                                   </p>
                            </TextContainer>
                            <div className="row mt-3 justify-content-center">
                                {
                                    skills.allStrapiTecnologias?.nodes?.filter(s => s.categorias.map(c => c.nombre).includes("main")).map((skill, i) => (
                                        <CardSkill key={i} className="d-flex flex-column align-items-center justify-content-center 
                                                                    mx-2 my-2 col-8 col-sm-5 col-md-3 col-lg-3 col-xl-3">
                                            <ImageSkill alt={skill.titulo} fluid={skill.imagen?.childImageSharp?.fluid} />
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
                                    ))
                                }
                            </div>
                        </section>
                        <section id="secondary" >
                            <div className={`d-flex justify-content-center mt-3`}>
                                <SectionTitle>Tecnologías secundarias</SectionTitle>
                            </div>
                            <TextContainer className="text-center mx-5">
                                   <p> 
                                       En esta sección están las habilidades técnicas secundarias que uso con menos frecuencia y 
                                       no domino como las principales, con las cuales podría implementar soluciones en caso de necesitarlas y extender mi conocimiento
                                       sobre ellas. 
                                   </p>
                            </TextContainer>
                            <div className="row mt-3 justify-content-center">
                                {
                                    skills.allStrapiTecnologias?.nodes?.filter(s => s.categorias.map(c => c.nombre).includes("secondary")).map((skill, i) => (
                                        <CardSkill key={i} className="d-flex flex-column align-items-center justify-content-center 
                                                                    mx-2 my-2 col-8 col-sm-5 col-md-3 col-lg-3 col-xl-3">
                                            <ImageSkill alt={skill.titulo} fluid={skill.imagen?.childImageSharp?.fluid} />
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
                                    ))
                                }
                            </div>
                        </section>
                        {sections.map((section, i) => (
                            <section key={i} id={section}>
                                <div className={`d-flex justify-content-center mt-3`}>
                                    <SectionTitle>{getTitleSection(section)}</SectionTitle>
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    {skills.allStrapiTecnologias?.nodes?.filter(s => s.categorias.map(c => c.nombre).includes(section)).length !== 0 ?
                                        skills.allStrapiTecnologias?.nodes?.filter(s => s.categorias.map(c => c.nombre).includes(section)).map((skill, i) => (
                                            <CardSkill key={i} className="d-flex flex-column align-items-center justify-content-center 
                                                                    mx-2 my-2 col-8 col-sm-5 col-md-3 col-lg-3 col-xl-3">
                                                <ImageSkill alt={skill.titulo} fluid={skill.imagen?.childImageSharp?.fluid} />
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
                                        )) : (<TextContainer className="text-center my-3">
                                            <p>Aún no hay proyectos de este tipo, me estoy preparando <span role="img" aria-label="smiles">😅😃</span></p>
                                        </TextContainer>)}
                                </div>
                            </section>
                        ))}
                    </div>
                </Fade>
            </Grid>
        </>
    )}/>)