import axios from "axios"

export default axios.create({
	baseURL:
		process.env.NODE_ENV === "production"
			? "https://old-api.guilherr.me"
			: "http://localhost:3939"
})
