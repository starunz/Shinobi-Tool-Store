import axios from "axios";

const base = 'http://localhost:5000';

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const api = {

}

export default api;