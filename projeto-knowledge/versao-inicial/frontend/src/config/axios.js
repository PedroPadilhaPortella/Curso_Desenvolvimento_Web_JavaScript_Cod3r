import axios from 'axios';

const success = res => res

const error = err => {
    if(err.response.status === 401) {
        window.location = '/'
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)