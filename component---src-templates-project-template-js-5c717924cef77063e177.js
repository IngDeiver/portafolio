(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/NGs":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return I}));var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("3R+Q"),l=o.default.div.withConfig({displayName:"containerDetailProject",componentId:"qxir30-0"})(["background-color:",";border-radius:10px;transition:",";"],(function(e){return e.theme.colors.containerImageColor}),i.a),c=a("uizm"),s=a("mF98"),m=Object(o.css)(["@media only screen and (max-width:","){}@media only screen and (min-width:","){}@media only screen and (min-width:","){}@media only screen and (min-width:","){}"],s.d,s.c,s.b,s.a),d=o.default.div.withConfig({displayName:"detaiProjectOverflow",componentId:"sc-1vtkx3c-0"})(["position:absolute;bottom:",";left:",";width:0px;;height:calc(100% - 2*",");overflow:hidden;background-color:rgba(0,0,0,0.5);border-radius:",";transition:",";",";"],c.b,c.b,c.b,c.c,i.a,m),f=o.default.a.withConfig({displayName:"btnOptionDetailProject",componentId:"sc-9grpcq-0"})(['background-color:black;border:none;color:white;padding:10px 32px;text-align:center;text-decoration:none;display:inline-block;border-radius:50px;font-family:"Roboto Condensed";font-weight:300;box-shadow:1px 0px 7px 2px rgba(0,0,0,0.3);&:link,&:visited,&:active{text-decoration:none;color:white;}&:hover{cursor:pointer;opacity:.7;text-decoration:none;color:white;}border:2px solid white;']),u=a("iSB0"),p=a("vrFN"),y=a("9eSz"),b=a.n(y),g=a("lepN"),h=Object(o.default)(b.a).withConfig({displayName:"imgTecnologia",componentId:"sc-1el8eiw-0"})(["border-radius:50%;",";"],g.a),x=function(e){var t=e.titulo,a=e.imagen;return r.a.createElement("div",{className:"d-flex flex-column jutisy-content-center align-items-center mx-1"},r.a.createElement(h,{alt:t,fixed:a}),r.a.createElement("p",{className:"mt-2 text-center"},t))},w=a("/eHF"),E=a.n(w),v=o.default.div.withConfig({displayName:"detailProjectOverflowContainer",componentId:"z5260j-0"})(["position:relative;overflow:hidden;:hover{div.overflow{width:calc(100% - 2*",");}}"],c.b),N=a("Wbzz"),j=a("sHP8"),P=function(){var e=Object(N.useStaticQuery)("4058324225").logoWhite;return r.a.createElement("div",{className:"col-4 col-sm-8 col-md-8 col-lg-4 col-xl-4  d-flex  justify-content-center mt-md-auto mb-md-auto justify-content-sm-center justify-content-md-start justify-content-lg-end justify-content-xl-end "},r.a.createElement(j.a,{className:"img-fluid",src:e.childImageSharp.fixed.src}))},k=o.default.div.withConfig({displayName:"btnDetailProjectContainer",componentId:"vzpwap-0"})(["margin-left:20px;",";"],i.a),I=(t.default=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{title:"Proyecto | "+t.strapiProyectos.titulo}),r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l,{className:"d-flex justify-content-center my-5  flex-wrap container"},r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement(c.a,{fluid:t.strapiProyectos.imagen.childImageSharp.fluid}),r.a.createElement(d,{className:"overflow d-flex align-items-center justify-content-center"},r.a.createElement(P,null),r.a.createElement("div",{className:"d-flex flex-column mr-5"},t.strapiProyectos.url?r.a.createElement(f,{target:"_blank",href:t.strapiProyectos.url,rel:"noreferrer",className:"my-2"},"Visitar"):r.a.createElement(f,{className:"my-2 mr-4"},"Muestra no disponible"),t.strapiProyectos.repositorio?r.a.createElement(f,{target:"_blank",href:t.strapiProyectos.repositorio,rel:"noreferrer",className:"my-2"},"Repositorio"):r.a.createElement(f,{className:"my-2"},"Repositorio no disponible"),t.strapiProyectos.video?r.a.createElement(f,{target:"_blank",href:t.strapiProyectos.video,rel:"noreferrer",className:"my-2"},"Video"):r.a.createElement(f,{className:"my-2"},"Video no disponible")))),r.a.createElement(u.a,{className:"my-3"},r.a.createElement(E.a,{bottom:!0},r.a.createElement("h1",{className:"title my-3"},t.strapiProyectos.titulo),t.strapiProyectos.descripcion.split(".").map((function(e,t){return r.a.createElement("p",{key:t,className:"text-justify my-1"},e+".")}))),r.a.createElement(E.a,{bottom:!0},r.a.createElement("h2",{className:"subtitle mt-2"},"Tecnologías"),r.a.createElement("div",{className:"d-flex row justify-content-start  mt-3"},r.a.createElement("div",{style:{marginLeft:"5px"},className:"d-flex row justify-content-around mx-2"},t.strapiProyectos.tecnologias.map((function(e,t){return r.a.createElement("div",{key:t+1,className:"mx-1"},r.a.createElement(x,{key:t,imagen:e.imagen.childImageSharp.fixed,titulo:e.titulo}))})))))),r.a.createElement(E.a,{bottom:!0},r.a.createElement(k,{className:"d-flex flex-column justify-content-center align-items-center flex-sm-column justify-content-sm-center align-items-sm-center flex-md-row justify-content-md-start flex-lg-row justify-content-lg-start flex-xl-row justify-content-xl-start d-lg-none .d-xl-block d-xl-none my-2"},t.strapiProyectos.url?r.a.createElement(f,{target:"_blank",href:t.strapiProyectos.url,rel:"noreferrer",className:"my-2 mr-4"},"Visitar"):r.a.createElement(f,{className:"my-2 mr-4"},"Muestra no disponible"),t.strapiProyectos.repositorio?r.a.createElement(f,{target:"_blank",href:t.strapiProyectos.repositorio,rel:"noreferrer",className:" my-2 mr-4"},"Repositorio"):r.a.createElement(f,{className:"my-2"},"Repositorio no disponible"),t.strapiProyectos.video?r.a.createElement(f,{target:"_blank",href:t.strapiProyectos.video,rel:"noreferrer",className:"my-2 mr-4"},"Video"):r.a.createElement(f,{className:"my-2"},"Video no disponible")))))))},"3751099702")},sHP8:function(e,t,a){"use strict";var n=a("vOnD"),r=a("mF98"),o=Object(n.css)(["@media only screen and (max-width:","){&{width:55%;}}@media only screen and (min-width:","){&{width:50%;}}@media only screen and (min-width:","){&{width:50%;}}@media only screen and (min-width:","){&{width:100%;}}"],r.d,r.c,r.b,r.a);t.a=n.default.img.withConfig({displayName:"logo",componentId:"chgpiz-0"})(["",";"],o)}}]);
//# sourceMappingURL=component---src-templates-project-template-js-5c717924cef77063e177.js.map