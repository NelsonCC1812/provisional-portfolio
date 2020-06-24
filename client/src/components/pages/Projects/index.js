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
        <div className='pagesContainer'>
            <h1>Projects</h1>
            { projectsDB.map(elm => <ProjectCard key={ elm.order } { ...elm } />) }
        </div>
    )
}