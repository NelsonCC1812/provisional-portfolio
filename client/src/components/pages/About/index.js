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
                Resolutive, curious, hard-working, friendly. Looking for have deeper and varied knoledge and new challenges.
            </p>

            <section style={ { marginTop: '20px' } }>
                <h3>I studied on:</h3>
                <figure style={ { textAlign: 'center' } }><img style={ { width: '90px' } } src='./images/about/ironhack.png' alt='ironhack' /> <figcaption>Ironhack</figcaption></figure>
            </section>
            <TechSection />
        </div>
    )
}