import React from 'react'

export default function ProjectCard_({ order, name, description, objetive, duration, image, link }) {

    console.log(image)

    return (
        <div style={ { border: '1px solid red' } }>
            <h2> { name }</h2>
            <img src={ image } />
            <h3>Order: { order }</h3>
            <h3>Descrition: { description }</h3>
            <h3>Objetive: { objetive }</h3>
            <h3>Duration: { duration }</h3>
            <a rel='noopener noreferrer' target='_blank' href={ link }>Link to web { order > 1 && '(delays first time because free CDN politics)' } </a>
        </div>

    )
}