import axios from 'axios'

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API}/mail`,
            withCredentials: true
        })
    }
    sendMail = mail => this.service.post('/sendMail', mail).then(response => response.data)
}