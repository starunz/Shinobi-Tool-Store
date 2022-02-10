import axios from "axios";

const api = axios.create( {baseURL:'http://localhost:5000'})

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const signUp = (body) => {
    const promisse = api.post('/sign-up', body)

    return promisse;
}

export {
    signUp,
}