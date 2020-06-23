import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

import './footer.css'


export default function Footer_() {


    return (
        <div className='myFooter'>
            <Navbar sticky='bottom' variant="dark" bg="dark" >
                <Navbar.Text style={ { width: '100%', textAlign: 'center' } }>
                    Made by: { <a rel='noopener noreferrer' target='_blank' href='https://linkedin.com/in/nelson-cc'>Nelson Cabrera Cano</a> }
                </Navbar.Text>
            </Navbar>
        </div>
    )
}