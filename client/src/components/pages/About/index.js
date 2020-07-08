//React imports
import React from 'react'

//Custom elements
import TechSection from './TechSection'

//Custom styles
import './about.css'

export default function About_() {
    return (
        <div className='pagesContainer'>
            <h1 style={ { marginBottom: '30px' } }>About me</h1>

            <div style={ { textAlign: 'justify' } }>
                <p>Nacido en las Islas Canarias (Fuerteventura). Estudié en Madrid el bootcamp de Full-Stack Development en Ironhack, donde aprendi el uso de varias tecnologías para el desarrollo web full-stack, como son: React, Node, Express, HTML, CSS, JS(ES6), MongoDB... Anteriormente, estudié en la Universidad de Málaga Ingeniería Electrónica, Robótica y Mecatrónica, pendiente de finalizar y paralelamente realicé varios cursos adicionales: Java orientado a Android, vehículos eléctricos...</p>
                <p>Resolutivo, curioso, trabajador, simpatico. Buscando tener conocimientos más profundos y variados, así como, afrontar nuevos retos. Actualmente me encuentro estudiando nuevas tecnologías y desarrollando nuevos proyectos con el fin de aplicar los conocimientos adquiridos previamente y poder desarrollar nuevas hard skills, probar nuevos diseños, formas de diseñar, metodologías...</p>
                <p>He de decir que me esfuerzo mucho por proveer soluciones lo más profesionales posibles, haciendo hincapié en la limpieza y calidad del código, usando en la medida de los posible las herramientas de las que disponemos, como son: métodos, funciones, dependencias... </p>
            </div>

            <h6 style={ {} }>See more about me:</h6>

            <div style={ { paddingTop: '5px', paddingBottom: '30px', display: 'flex', justifyContent: 'space-evenly', } }>


                <a style={ { display: 'flex', alignItems: 'flex-end' } } target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/nelson-cc'>
                    <img style={ { width: '40px' } } src='./images/about/linkedin.svg' />
                    <h6 style={ { color: '#03697f', marginLeft: '5px' } }>Linkedin</h6>
                </a>

                <a style={ { display: 'flex', alignItems: 'flex-end' } } target='_blank' rel='noopener noreferrer' href='https://github.com/nelsoncc1812'>
                    <img style={ { width: '50px' } } src='./images/about/github.png' />
                    <h6 style={ { color: '#03697f', marginLeft: '5px' } }>Github</h6>
                </a>

            </div>

            <section style={ { marginTop: '20px' } }>
                <h3>I studied on:</h3>
                <hr />
                <div style={ { display: 'flex', justifyContent: 'space-around' } }>

                    <a target='_blank' rel='noopener noreferrer' href='https://www.ironhack.com/es/desarrollo-web'>
                        <figure style={ { textAlign: 'center' } }>

                            <img style={ { width: '90px' } } src='./images/about/ironhack.png' alt='ironhack' />
                            <figcaption>Ironhack</figcaption>
                            <p>Full-stack dev</p>

                        </figure>
                    </a>

                    <a target='_blank' rel='noopener noreferrer' href='https://www.uma.es/#gsc.tab=0'>
                        <figure style={ { textAlign: 'center' } }>

                            <img style={ { width: '90px' } } src='./images/about/malagau.svg' alt='malaga university' />
                            <figcaption>Malaga University</figcaption>
                            <p >ERME (not finished)</p>

                        </figure>
                    </a>

                </div>
            </section>
            <TechSection />
        </div >
    )
}