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
            <div className='pagesContainer'>
                <h1>Projects</h1>
                { projectsDB.map(elm => <ProjectCard key={ elm.order } { ...elm } />) }
            </div>

            <div style={ { backgroundColor: 'rgb(240, 240, 235)', paddingTop: '50px', paddingBottom: '30px', width: '100%', padding: '50px 80px 30px 80px' } }>
                <h2>Actually</h2>
                <hr />
                <p>I am currently in active work search, studying a Redux course (when I finish I will create a better version of a portfolio). Then I want to study a course of Docker, Kubernetes and Jenkins (separated)</p>
            </div>
        </>
    )
}