//React
import React from 'react'

//Bootstrap
import Col from 'react-bootstrap/Col'

//Styles
import './techCard.css'

export default function TechCard_({ name, img, link }) {
    return (
        <Col md={ 3 } sm={ 6 } xs={ 6 }>
            <div className='techCard'>
                <a target='_blank' rel='noopener noreferrer' href={ link }>
                    <figure><img src={ img } alt={ name } /></figure>
                    <h6>{ name }</h6>
                </a>
            </div>
        </Col>
    )
}