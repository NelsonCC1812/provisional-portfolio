//React imports
import React, { useEffect } from 'react'

import NavigationExplain from './NavigationExplain'

//Custom style
import './home.css'

export default function Home_(props) {

    useEffect(() => {
        props.setUrl()
    }, [])

    return (
        <div className='pagesContainer'>
            <h1 >My Portfolio</h1>

            <NavigationExplain />

            <div>
                <p >Thats a provisional portfolio, realized in less than a week to serve a provisional porpouse. I am actually learning about Redux. Then I will create a definitive porfolio, the code of this portfolio is in this <a target='_blank' rel='noopener noreferrer' style={ { color: 'rgb(130,130,250)' } } href='https://github.com/nelsoncc1812/provisional-portfolio'> link</a>. This portfolio is realized in React, using too some interesting technologies as: Boostrap, axios... The messages system its currently working online, so I can see messages if you want to contact with me. (Heroku makes this page load too slow first time every some minutes, to see the real load speed make a hard refresh (Cmd + Shift + R, Ctrl + F5))
            </p>
            </div>

        </div>
    )
}