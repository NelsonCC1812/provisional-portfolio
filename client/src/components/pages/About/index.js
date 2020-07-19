//React imports
import React, { useEffect } from 'react'

//Custom elements
import TechSection from './TechSection'

//Custom styles
import './about.css'

export default function About_(props) {

    useEffect(() => {
        props.setUrl()
    }, [])

    return (
        <div className='pagesContainer'>
            <h1 style={ { marginBottom: '30px' } }>About me</h1>

            <div style={ { textAlign: 'justify' } }>
                <p>Born in Canary Islands (Fuerteventura). I studied in Madrid the Full-Stack Development bootcamp in Ironhack, where I learned to use some different technologies for the web development, as: React, Node, Express, HTML, CSS, JS(ES6), MongoDB... Previously, I studied in Malaga University Electronics, Robotics and Mecatronics Engineering, pending of finalization and parallel I made son other courses: Java oriented to Android, electric vehicles...</p>
                <p>Resolutive, curious, hard-working, friendly. Looking for have deeper and varied knowledge and new challenges. Actually I am studying new technologies and developing new projects with the purpose of apply the new knowledges acquired previously and expand new hard skills, try new designs, methodologies...</p>
                <p>I have to say I strive a lot to provide solutions as professionals as I can, emphasizing clean and quality of code, using as far as posible the tools we have, as: methods, functions, dependencies...</p>
            </div>

            <h6 >See more about me:</h6>

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
                <div className='bar'>
                    <h3 style={ { color: 'white', paddingLeft: '5px' } }>I studied on:</h3>
                </div>
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