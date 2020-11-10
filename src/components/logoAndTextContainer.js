import React from "react";
import Logo from './logo'

/*Es el componente que reusuare para cuando necesite agregar el logo con  contenido a la derecha 
junto a todas las media querys para el responsive design*/

export default ({children}) => (
    <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row  mt-4 ">
        <Logo />
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 mt-4 mt-sm-4">
            {children}
        </div>
    </div>
)