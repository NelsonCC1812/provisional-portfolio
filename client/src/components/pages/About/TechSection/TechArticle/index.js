//React
import React from 'react'

//Bootstrap
import Row from 'react-bootstrap/Row'

//Custom components
import TechCard from './TechCard'

//Styles
import './techarticle.css'

export default function TechArticle_({ title, technologies }) {

    return (
        <article className='techArticle'>
            <h3 >{ title }</h3>
            <hr />
            <Row className='align-items-end'>

                { technologies.map(elm => <TechCard key={ elm.name } { ...elm } />) }

            </Row>
        </article>
    )
}