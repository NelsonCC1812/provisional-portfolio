import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './navigationExplain.css'

export default function NavigationExplain_() {
    return (
        <Container>
            <Row className='justify-content-around' >

                <Col className='navigationExplain' md={ 4 } >
                    <Link to='/about'>
                        <h4>About me</h4>
                        <p>Here you can see info about me and technologies I use</p>
                    </Link>
                </Col>

                <Col className='navigationExplain' md={ 4 } >
                    <Link to='/projects'>
                        <h4>My projects</h4>
                        <p>Here you will see some of my principal projects and some information about my current work</p>
                    </Link>
                </Col>
            </Row>

        </Container>
    )
}