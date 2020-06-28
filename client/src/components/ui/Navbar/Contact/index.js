//React imports
import React from 'react'

//Custom components
import MailForm from './MailForm'

//Custom styles
import './contact.css'

export default function Contact_(props) {
    return (
        <div style={ { width: '80%', marginLeft: '2vw' } }>
            <h1 style={ { marginTop: '5vh', fontSize: '3.5em' } }>Contact</h1>
            <div className='contactContainer'>

                <MailForm closeContactModal={ () => props.closeContactModal() } />

            </div>
        </div>
    )
}