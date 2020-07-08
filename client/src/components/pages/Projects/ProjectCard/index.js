import React from 'react'

import './projectCard.css'

export default function ProjectCard_({ order, name, description, objetive, duration, image, link }) {

    return (
        <div className='projectCard'>
            <h4> { name }</h4>
            <div style={ { paddingTop: '40px', borderBottom: '1px solid black' } }>
                <a rel='noopener noreferrer' target='_blank' href={ link }><img style={ { marginBottom: '10px' } } src={ image } alt={ name } /></a>
                <p><b>Order:</b> { order } </p>
                <p><b>Descrition:</b> { description }</p>
                <p><b>Objetive:</b> { objetive }</p>
                <p><b>Duration:</b> { duration } { `week${duration > 1 ? 's' : ''}` } </p>
                <a style={ { color: 'rgb(130,130,250)' } } rel='noopener noreferrer' target='_blank' href={ link }>Link to web { order > 1 && '(delays first time because free CDN politics)' } </a>
            </div>
        </div>

    )
}