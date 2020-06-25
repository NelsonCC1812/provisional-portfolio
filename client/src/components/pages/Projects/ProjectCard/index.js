import React from 'react'

export default function ProjectCard_({ order, name, description, objetive, duration, image, link }) {

    console.log(image)

    return (
        <div style={ { border: '1px solid red' } }>
            <h3>Order: { order }</h3>
            <h3>Name: { name }</h3>
            <h3>Descrition: { description }</h3>
            <h3>Objetive: { objetive }</h3>
            <h3>Duration: { duration }</h3>
            <h3>Image</h3><img src={ image } />
            <a href={ link }>Link </a>
        </div>

    )
}