import axios from 'axios'

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: process.env.API,
            withCredentials: true
        })
    }
    senMail = mail => axios.post('/sendMail', mail).then(response => response.data)
}