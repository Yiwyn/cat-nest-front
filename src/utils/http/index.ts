import axios, {AxiosRequestConfig} from "axios";

axios.defaults.baseURL = 'https://api.apiopen.top/api/'

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