import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3ff82589a1a3448cb2b882a07053bcd2'
    }
})