import React from 'react'

import './projectCard.css'

export default function ProjectCard_({ order, name, description, objetive, duration, image, link }) {

    return (
        <div className='projectCard'>
            <h2> { name }</h2>
            <div style={ { paddingTop: '40px', borderTop: '2px solid black', borderBottom: '2px solid black' } }>
                <img src={ image } />
                <h3>Order: { order } </h3>
                <h3>Descrition: { description }</h3>
                <h3>Objetive: { objetive }</h3>
                <h3>Duration: { duration } weeks</h3>
                <a style={ { color: 'rgb(130,130,250)' } } rel='noopener noreferrer' target='_blank' href={ link }>Link to web { order > 1 && '(delays first time because free CDN politics)' } </a>
            </div>
        </div>

    )
}