import React from 'react'

import Modal from 'react-bootstrap/Modal'

import Contact from './Contact'

export default function ContactModal_(props) {

    return (
        <Modal show={ props.showContactModal } onHide={ props.closeContactModal } centered='true'>
            <Contact closeContactModal={ () => props.closeContactModal() } />
        </Modal>
    )
}