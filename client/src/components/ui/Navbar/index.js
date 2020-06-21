//React
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Bootstrap
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

//Custom styles
import './navbar.css'

export default function Nabvar_(props) {

    //State
    const [colors, setColors] = useState({
        about: 'grey',
        projects: 'grey',
        contact: 'grey'
    })

    //Handle links hover color change
    const linkHandler = (e) => {

        const copy = {
            about: 'grey',
            projects: 'grey',
            contact: 'grey'
        }

        copy[e] = 'white'

        setColors(copy)
    }
    const setDefaultColor = () => setColors({ about: 'grey', projects: 'grey', contact: 'grey' })

    //Change navbar color on scroll

    useEffect(() => {
        let prevY = window.pageYOffset

        window.onscroll = () => {
            if (prevY + 3 < window.pageYOffset) {
                document.getElementsByClassName('myNavbar')[0].classList.add('uphidden')
            } else if (prevY - 3 > window.pageYOffset) {
                document.getElementsByClassName('myNavbar')[0].classList.remove('uphidden')
            }
            prevY = window.pageYOffset
        }
    })


    return (
        <Navbar className='myNavbar' sticky='top' bg='dark' variant='dark' className='myNavbar' expand='md'>

            <div style={ { display: 'flex', justifyContent: 'space-between', width: '100%' } }>

                <Nav as={ Col } md={ 6 } sm={ 12 } xs={ 12 }>
                    <div className='allLinks'>

                        <div className='mainNav'>
                            <Navbar.Brand as={ Link } to='home'>My portfolio</Navbar.Brand>
                            <Navbar.Toggle style={ { height: '20%' } } />
                        </div>

                        <Navbar.Collapse  >
                            <Nav.Link className='link' style={ { color: `${colors.about}` } } as={ Link } to='/about' onPointerOut={ setDefaultColor } onPointerOver={ () => linkHandler('about') }>About</Nav.Link>
                            <Nav.Link className='link' style={ { color: `${colors.projects}` } } as={ Link } to='/projects' onPointerOut={ setDefaultColor } onPointerOver={ () => linkHandler('projects') }>Projects</Nav.Link>
                            <Nav.Link className='link' style={ { color: `${colors.contact}` } } as={ Link } to='/contact' onPointerOut={ setDefaultColor } onPointerOver={ () => linkHandler('contact') }>Contact</Nav.Link>
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