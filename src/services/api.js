import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5000' })

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

const login = (body) => {
    const promisse = api.post('/login', body)

    return promisse;
}

const getProducts = () => {
    const promise = api.get('/');

    return promise;
}

const getProduct = (id) => {
    const promise = api.get(`/product/${id}`)

    return promise;
}

export {
    signUp,
    login,
    getProducts,
    getProduct
}