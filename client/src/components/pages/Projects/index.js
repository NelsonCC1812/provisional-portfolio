//React imports
import React from 'react'

//Data import
import projectsDB from '../../../data/projects.json'

//Custom components
import ProjectCard from './ProjectCard'

//Custom styles
import './projects.css'


export default function Projects_() {
    return (
        <>
            <div style={ { paddingTop: '50px', paddingBottom: '30px', margin: '0 10vw' } }>
                <h1>Actually</h1>
                <hr />
                <p>I am currently in active work search, studying a Redux course (when I finish I will create a better version of a portfolio). Then I want to study a course of Docker, Kubernetes and Jenkins (separated)</p>
            </div>

            <div className='pagesContainer'>
                <h2>Projects</h2>
                { projectsDB.map(elm => <ProjectCard key={ elm.order } { ...elm } />) }
            </div>

        </>
    )
}