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
    const [toggling, toggler] = useState(false)

    //Hide navbar color on scroll

    useEffect(() => {
        let prevY = window.pageYOffset

        window.onscroll = () => {
            if (prevY < window.pageYOffset && !toggling && window.location.pathname !== '/contact') {
                document.getElementsByClassName('myNavbar')[0].classList.add('uphidden')
            } else if (prevY > window.pageYOffset && !toggling) {
                document.getElementsByClassName('myNavbar')[0].classList.remove('uphidden')
            }
            prevY = window.pageYOffset
        }
    })

    useEffect(() => {
        document.getElementsByClassName('navbar-collapse')[0].classList.remove('show')
    }, [props.url])

    //Togler hadler
    const togglerHandler = () => {

        const expanded = document.getElementsByClassName('navbar-collapse')[0].classList

        expanded.contains('show') ? expanded.remove('show') : expanded.add('show')

        toggler(true)
        setTimeout(() => toggler(false), 500)
    }


    return (

        <Navbar className='myNavbar' sticky='top' expand='md'>

            <div style={ { display: 'flex', justifyContent: 'space-between', width: '100%' } }>

                <Nav as={ Col } md={ 6 } sm={ 12 } xs={ 12 }>
                    <div className='allLinks'>

                        <div className='mainNav'>
                            <Navbar.Brand as={ Link } to='home' style={ { marginLeft: '10px' } }>My portfolio</Navbar.Brand>
                            <img src='./images/menu.svg' className='toggler' name='toggle' style={ { height: '20%', width: '35px' } } onClickCapture={ togglerHandler } />
                        </div>

                        <Navbar.Collapse  >
                            <Nav.Link className='link' as={ Link } to='/about' >About me</Nav.Link>
                            <Nav.Link className='link' as={ Link } to='/projects' >My projects</Nav.Link>
                            <Nav.Link className='link' onClick={ props.openContactModal }>Contact me</Nav.Link>
                        </Navbar.Collapse>

                    </div>
                </Nav>

                <Navbar.Collapse as={ Col } md={ 3 } className='justify-content-end'>
                    <Navbar.Text className='firm' style={ { marginLeft: '5px', marginRight: '10px' } }>
                        Provisional portfolio
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>

        </Navbar>
    )
}