//React imports
import React from 'react'

//Custom elements
import TechSection from './TechSection'

//Custom styles
import './about.css'

export default function About_() {
    return (
        <div className='pagesContainer'>
            <h1>About</h1>

            <p>
                Born in Canary Islands (Fuerteventura), in the year 1997. I studied some year in the UMA, electronic, robotic and mecatronic engineering, not finishing it. At the same time I finished some aditional courses: Java oriented to Android, electric vehicles... After that in Madrid I studied the Full-Stack Developer course in Ironhack.
            </p>
            <p>
                Resolutive, curious, hard-working, friendly. Looking for have deeper and varied knowledge and new challenges.
            </p>


            <div style={ { paddingTop: '40px', paddingBottom: '30px', display: 'flex', justifyContent: 'space-evenly', } }>

                <a style={ { display: 'flex', alignItems: 'flex-end' } } target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/nelson-cc'>
                    <img style={ { width: '40px' } } src='./images/about/linkedin.svg' />
                    <h6>Linkedin</h6>
                </a>

                <a style={ { display: 'flex', alignItems: 'flex-end' } } target='_blank' rel='noopener noreferrer' href='https://github.com/nelsoncc1812'>
                    <img style={ { width: '50px' } } src='./images/about/github.png' />
                    <h6>Github</h6>
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
        </div>
    )
}