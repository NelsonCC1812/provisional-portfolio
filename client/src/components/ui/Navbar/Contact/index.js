//React imports
import React from 'react'

//Images
import { ReactComponent as LogoLinkedin } from '../../../../images/linkedin.svg'
import { ReactComponent as LogoMail } from '../../../../images/correo.svg'

//Bootstrap components
import Container from 'react-bootstrap/Container'

//Custom styles
import './contact.css'

export default function Contact_() {
    return (
        <div style={ { minWidth: '70vw', marginLeft: '2vw' } }>
            <h1 style={ { marginTop: '5vh', fontSize: '3.5em' } }>Contact</h1>
            <div className='contactContainer'>

                <li className='contactElm' >
                    <a href='https://linkedin.com/in/nelson-cc' target='_blank' rel='noopener noreferrer'>
                        <figure><LogoLinkedin /></figure>
                        <h4>Linkedin</h4>
                    </a>
                </li>

                <li className='contactElm' >
                    <a type='email' href='mailto: nelsoncc1812@gmail.com'>
                        <figure><LogoMail /></figure>
                        <h4>Email</h4>
                    </a>
                </li>

            </div>
        </div>
    )
}