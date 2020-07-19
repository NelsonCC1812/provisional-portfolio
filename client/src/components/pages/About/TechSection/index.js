//React
import React from 'react'

//Bootstrap
import Container from 'react-bootstrap/Container'

//Custom components
import TechArticle from './TechArticle'

//Data
import technologies from '../../../../data/technologies.json'

//Custom styles
import './techSection.css'

export default function TechSection_(props) {

    const articles = Object.keys(technologies)

    return (
        <section >
            <h2>Technologies</h2>
            <hr />
            <Container>
                { articles.map(elm => <TechArticle key={ elm } title={ elm } technologies={ technologies[elm] } />) }
            </Container>
        </section>
    )
}