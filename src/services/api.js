import axios from "axios"

const api = axios.create({
	baseURL: process.env.GATSBY_API_URL
})

export default api