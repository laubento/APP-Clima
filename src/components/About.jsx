import React from "react"
import './About.css'

export default function About(){
    return(
        <div className="container-principal-about">
            <div className="container-oscuro">
                <h1>Sobre la APP!</h1>
                <p>🌕Esta aplicacion WEB utiliza un API externa llamada: Open Weather Map</p>
                <p>🌕Posee funciones para traer informacion exacta que manda la API</p>
                <p>🌕La informacion se renderiza en Cards (cartas)</p>
                <p>🌕Podemos buscar informacion de cualquier ciudad a traves del buscador</p>
                <p>🌕La aplicacion fue desarrollada con:</p>
                    <p>💻React.JS</p>
                    <p>💻HTML</p>
                    <p>💻CSS</p>
                    <p>💻JavaScript</p>
                <p>🌕Creada por:<a target={"_blank"} href="https://laubento.github.io/Portafolio/"> Lautaro Iribarren</a></p>
            </div>
            <div className="container-claro">
                <h1>Mas informacion</h1>
                <p>🌕Pagina oficial Weather:<a target={"_blank"} href="https://openweathermap.org"> 👉Link</a></p> 
                <p>🌕Informacion React.JS:<a target={"_blank"} href="https://es.reactjs.org"> 👉Link</a></p> 
                <p>🌕Informacion JavaScript:<a target={"_blank"} href="https://developer.mozilla.org/es/docs/Web/JavaScript"> 👉Link</a></p> 
                <p>🌕Informacion CSS:<a target={"_blank"} href="https://developer.mozilla.org/es/docs/Web/CSS"> 👉Link</a></p> 
                <p>🌕Informacion HTML:<a target={"_blank"} href="https://developer.mozilla.org/es/docs/Web/HTML"> 👉Link</a></p> 
                <p>🌕Linkedin Creador:<a target={"_blank"} href="https://www.linkedin.com/in/lautaroiribarren-desarrollador/"> 👉Link</a></p> 
            </div>
        </div>
    )
}