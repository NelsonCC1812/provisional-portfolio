//React imports
import React from 'react'
import { Link } from 'react-router-dom'

//Bootstrap imports
import Navbar from 'react-bootstrap/Navbar'

//Custom imports
import './footer.css'

export default function Footer_() {

    return (
        <div className='myFooter'>
            <Navbar sticky='bottom' variant="dark" bg="dark" >
                <Navbar.Text style={ { width: '100%', textAlign: 'center' } }>
                    Made by: { <Link to='/about'>Nelson Cabrera Cano</Link> }
                </Navbar.Text>
            </Navbar>
        </div>
    )
}