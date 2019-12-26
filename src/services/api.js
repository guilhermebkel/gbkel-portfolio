import axios from "axios"

const api = axios.create({
	baseURL: "https://api.guilherr.me"
})

export default api