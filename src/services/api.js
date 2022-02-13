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
    const promise = api.get('/')

    return promise;
}

const getProduct = (id) => {
    const promise = api.get(`/product/${id}`)

    return promise;
}

const sendToCart = (body, token, productId) => {
    const configAuth = config(token)
    const promise = api.post(`/product/${productId}`, body, configAuth)

    return promise;
}

const getUserCart = (token) => {
    const userConfig = config(token)
    const promise = api.get('/cart', userConfig)

    return promise;
}

const updateCart = (id, qty, change, token) => {
    const configAuth = config(token)
    const promise = api.post('/cart', { id, qty, change }, configAuth)

    return promise;
}

export {
    signUp,
    login,
    getProducts,
    getProduct,
    sendToCart,
    getUserCart,
    updateCart
}