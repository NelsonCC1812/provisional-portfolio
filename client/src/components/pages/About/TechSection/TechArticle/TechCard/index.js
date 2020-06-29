import React from 'react'

export default function TechCard_({ name, img, link }) {
    return (
        <div>
            <a target='_blank' rel='noopener noreferrer' href={ link }></a>
            <figure><img src={ img } alt={ name } /></figure>
            <h5>{ name }</h5>
        </div>
    )
}