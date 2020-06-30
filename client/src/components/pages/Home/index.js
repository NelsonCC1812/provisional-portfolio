//React imports
import React from 'react'

//Custom style
import './home.css'

export default function () {


    return (
        <div className='pagesContainer'>
            <h1 style={ { marginBottom: '30px' } }>Home</h1>

            <p >Thats a provisional portfolio, realized in less than a week to serve a provisional porpouse. I am actually learning about Redux. Then I will create a definitive porfolio, the code of this portfolio (maybe esthetically is not too visual) is in this <a style={ { color: 'rgb(130,130,250)' } } href='https://github.com/nelsoncc1812/provisional-portfolio'> link</a>. This portfolio is realized in React, using too some interesting technologies as: Boostrap, axios... The messages system its currently working online, so I can see messages if you want to contact with me.
            </p>
            <img style={ { width: '80%' } } src='./images/home/rage.gif' alt='working while raging' />

        </div>
    )
}