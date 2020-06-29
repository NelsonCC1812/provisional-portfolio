//Reactx
import React from 'react'

//Custom components
import TechCard from './TechCard'

export default function TechArticle_({ title, technologies }) {

    return (
        <article>
            <h3>{ title }</h3>
            { technologies.map(elm => <TechCard key={ elm.name } { ...elm } />) }
        </article>
    )
}