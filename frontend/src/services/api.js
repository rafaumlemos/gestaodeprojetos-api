import axios from 'axios';

const api = axios.create({
    baseURL: 'localhost:3232/',
    headers: {'content-type': 'application/json'}
});

export default api;