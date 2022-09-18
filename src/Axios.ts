import axios from 'axios'

const baseUrl = process.env.NODE_ENV === "production" ? "https://headbook.adaptable.app/api" : "http://localhost:5000/api"

export const Axios = axios.create({
    baseURL: baseUrl
})