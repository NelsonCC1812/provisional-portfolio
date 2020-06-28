//React
import React, { useState } from 'react'

//Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//Custom styles
import './mailForm.css'

//Services
import MailService from '../../../../../services/selfMail.service'


export default function MailForm_(props) {
    //State
    const [mail, setMail] = useState({ email: '', subject: '', content: '' })
    const [errorMessage, setErrorMessage] = useState('')

    //Services

    const mailService = new MailService()

    //Handlers

    const inputsHandler = e => {
        setErrorMessage('')

        const { id, value } = e.target
        setMail({ ...mail, [id]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.email)) {

            if (mail.subject || mail.content) {
                const response = await mailService.sendMail(mail)
                response.status === 'ok' ? props.closeContactModal() : setErrorMessage('An error have ocurred please try again')
            } else
                setErrorMessage('You have to fill in subject and content fields')

        } else {
            setErrorMessage('The introduced email is not valid')
        }
    }

    return (
        < Form.Group >

            <Form.Label htmlFor='email'  >Email</Form.Label>
            <Form.Control className='formInput' type='text' id='email' value={ mail.email } placeholder='Your email to contact with you' onChange={ inputsHandler } />

            <Form.Label htmlFor='subject'>Subject</Form.Label>
            <Form.Control className='formInput' type='text' id='subject' value={ mail.subject } placeholder='The subject of your mail' onChange={ inputsHandler } />

            <Form.Label htmlFor='content'>Content</Form.Label>
            <Form.Control style={ { height: '100px' } } className='formInput' as='textarea' id='content' value={ mail.content } placeholder='What would you like to know or say?' onChange={ inputsHandler } />

            <Button style={ { marginBottom: '10px' } } type='submit' onClick={ submitHandler } >Submit</Button>
            <h6 style={ { color: 'red' } }>{ errorMessage }</h6>

        </Form.Group >
    )
}