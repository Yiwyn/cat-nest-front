import axios, {AxiosRequestConfig} from "axios";

import {dev_api} from "../../config/http";

// axios.defaults.baseURL = 'https://api.apiopen.top/api/'
axios.defaults.baseURL = dev_api
const get = (url: string, config?: AxiosRequestConfig) => {
    return axios.get(url, config)
}

const post = (url: string, config?: AxiosRequestConfig) => {
    return axios.post(url, config)
}


export {
    get,
    post
}