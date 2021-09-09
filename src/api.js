import axios from 'axios';

export const chatApi = axios.create({
    baseURL : "https://programming.coffee/",
})

