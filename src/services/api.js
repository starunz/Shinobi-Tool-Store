import axios from "axios";

const base = 'http://localhost:5000';

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getProducts() {
    const promise = axios.get(`${base}/`);
    return promise;
}

const api = {
    getProducts
}

export default api;