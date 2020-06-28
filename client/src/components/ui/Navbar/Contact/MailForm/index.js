//React
import React, { useState } from 'react'

//Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//Custom styles
import './mailForm.css'


export default function MailForm_() {
    const [mail, setMail] = useState({ email: '', subject: '', content: '' })

    const inputsHandler = e => {
        const { id, value } = e.target
        setMail({ ...mail, [id]: value })
    }

    const submitHandler = e => {
        e.preventDefault()


    }

    return (
        <Form.Group onSubmit={ submitHandler }  >

            <Form.Label htmlFor='email'  >Email</Form.Label>
            <Form.Control className='formInput' type='text' id='email' value={ mail.email } placeholder='Your email to contact with you' onChange={ inputsHandler } />

            <Form.Label htmlFor='subject'>Subject</Form.Label>
            <Form.Control className='formInput' type='text' id='subject' value={ mail.subject } placeholder='The subject of your mail' onChange={ inputsHandler } />

            <Form.Label htmlFor='content'>Content</Form.Label>
            <Form.Control style={ { height: '200' } } className='formInput' as='textarea' id='content' value={ mail.content } placeholder='What would you like to know or say?' onChange={ inputsHandler } />

            <Button style={ { marginBottom: '10px' } } type='submit' >Submit</Button>

        </Form.Group>
    )
}