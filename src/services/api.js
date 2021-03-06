import axios from "axios";

const api = axios.create({ baseURL: 'https://shinobi-tool-store.herokuapp.com' })

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

const getOrder = (token) => {
    const configAuth = config(token)
    const promise = api.get('/checkout', configAuth)

    return promise;
}

const postOrder = (body ,token) => {
    const configAuth = config(token)
    const promise = api.post('/checkout', body, configAuth)

    return promise;
}

const sendToCart = (body, token, productId) => {
    const configAuth = config(token)
    const promise = api.post(`/product/${productId}`, body, configAuth)

    return promise;
}

const getUserCart = (token) => {
    const configAuth = config(token)
    const promise = api.get('/cart', configAuth)

    return promise;
}

const updateCart = (id, qty, change, token) => {
    const configAuth = config(token)
    const promise = api.post('/cart', { id, qty, change }, configAuth)

    return promise;
}

const deleteItem = (id, qty, token) => {
    const configAuth = config(token)
    const promise = api.post(`/cart/${id}`, { quantity: qty }, configAuth)

    return promise;
}

const sendInfos = (token, body) => {
    const configAuth = config(token)
    const promise = api.post('/infos', body, configAuth)

    return promise;
}

const sendMessage = (body) => {
    const promise = api.post('/support', body)

    return promise;
}

export {
    signUp,
    login,
    getProducts,
    getProduct, 
    getOrder,
    sendToCart,
    getUserCart,
    updateCart,
    deleteItem,
    sendInfos,
    sendMessage,
    postOrder
}