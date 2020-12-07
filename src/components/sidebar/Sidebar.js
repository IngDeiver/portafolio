import React from 'react'
import Sidebar from '../../styled/components/sidebar'
import { Link as Smooth } from "react-scroll";
import sections from './sections'
import getTitleSection from './getTitleSection'


export default ({ haveMain }) => {

    return (
        <Sidebar className="sidebar">
            {haveMain &&
                <div className="mt-2" key="main">
                    <Smooth
                        className="sidebar-item"
                        activeClass="active"
                        to={"main"}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={300} >
                        Principales
                    </Smooth>
                </div>}
            {sections.map((section, i) => (
                <div className="mt-2" key={i}>
                    <Smooth
                        className="sidebar-item"
                        activeClass="active"
                        to={section}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={300} >{getTitleSection(section)}</Smooth>
                </div>
            ))}
        </Sidebar>
    )
}