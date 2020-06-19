import axios from 'axios'

export default class AuthService {
    constructor() {
        this.service = axios.create({ baseURL: process.env.REACT_APP_URL + '/auth', withCredentials: true })
        this.axiosCancelSource = axios.CancelToken.source()
    }

    loggedInUser = () => this.service.get('/isLoggedIn').then(response => response.data)

    signup = ({ username, password }) => this.service.post('/signup', { username, password }).then(response => response.data)
    login = ({ username, password }) => this.service.post('/login', { username, password }).then(response => response.data)
    logout = () => this.service.get('/logout').then(response => response.data)
}