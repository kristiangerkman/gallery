import axios from "axios"
const baseUrl = "http://localhost:3002/posts"

const getAllPics = () => {
    return axios.get(baseUrl);
}

export default { getAllPics }

