import React from 'react'

import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Nabvar_() {
    return (
        <Navbar className='myNavbar' bg='dark' variant='dark' className='myNavbar' expand='md'>

            <div style={ { display: 'flex', justifyContent: 'space-between', width: '100%' } }>

                <Nav as={ Col } md={ 6 } sm={ 12 } xs={ 12 }>
                    <div className='allLinks'>

                        <div className='mainNav'>
                            <Navbar.Brand as={ Link } to='home'>My portfolio</Navbar.Brand>
                            <Navbar.Toggle style={ { height: '20%' } } />
                        </div>

                        <Navbar.Collapse  >
                            <Nav.Link className='link' as={ Link } to='/about'>About</Nav.Link>
                            <Nav.Link className='link' as={ Link } to='/contact'>Contact</Nav.Link>
                        </Navbar.Collapse>

                    </div>
                </Nav>

                <Navbar.Collapse as={ Col } md={ 3 } className='justify-content-end'>
                    <Navbar.Text className='firm' style={ { marginLeft: '5px', marginRight: '10px' } }>
                        Made by: { < Link to="/about" >Nelson Cabrera Cano</ Link> }
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>

        </Navbar>
    )
}