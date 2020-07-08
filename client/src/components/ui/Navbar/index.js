//React
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Bootstrap
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'

//Custom components
import Contact from './Contact'

//Custom styles
import './navbar.css'

export default function Nabvar_(props) {

    //State
    const [toggling, toggler] = useState(false)
    const [showContactModal, setContactModal] = useState(false)

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

    //Togler hadler
    const togglerHandler = () => {
        toggler(true)
        setTimeout(() => toggler(false), 500)
    }

    //Modal handler
    const openContactModal = () => setContactModal(true)
    const closeContactModal = () => setContactModal(false)


    return (

        <Navbar className='myNavbar' sticky='top' expand='md'>

            <div style={ { display: 'flex', justifyContent: 'space-between', width: '100%' } }>

                <Nav as={ Col } md={ 6 } sm={ 12 } xs={ 12 }>
                    <div className='allLinks'>

                        <div className='mainNav'>
                            <Navbar.Brand as={ Link } to='home' style={ { marginLeft: '10px' } }>My portfolio</Navbar.Brand>
                            <Navbar.Toggle name='toggle' style={ { height: '20%' } } onClickCapture={ togglerHandler } />
                        </div>

                        <Navbar.Collapse  >
                            <Nav.Link className='link' as={ Link } to='/about' >About me</Nav.Link>
                            <Nav.Link className='link' as={ Link } to='/projects' >My projects</Nav.Link>
                            <Nav.Link className='link' onClick={ openContactModal }>Contact me</Nav.Link>
                        </Navbar.Collapse>

                    </div>
                </Nav>

                <Navbar.Collapse as={ Col } md={ 3 } className='justify-content-end'>
                    <Navbar.Text className='firm' style={ { marginLeft: '5px', marginRight: '10px' } }>
                        Provisional portfolio
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>

            <Modal show={ showContactModal } onHide={ closeContactModal } centered='true'>
                <Contact closeContactModal={ () => closeContactModal() } />
            </Modal>

        </Navbar>
    )
}