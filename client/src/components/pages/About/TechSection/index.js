//React
import React from 'react'

//Custom components
import TechArticle from './TechArticle'

//Data
import technologies from '../../../../data/technologies.json'

//Custom styles
import './techSection.css'

export default function TechSection_() {

    const articles = Object.keys(technologies)

    return (
        <section>
            <h3>Technologies</h3>
            { articles.map(elm => <TechArticle key={ elm } title={ elm } technologies={ technologies[elm] } />) }
        </section>
    )
}