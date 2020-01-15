import axios from "axios"
const baseUrl = "http://localhost:3002/posts"

const getAllPics = async () => {
    return await axios.get(baseUrl);
}

const uploadPost = (request) => {
    return axios.post(baseUrl, request)

}

export default { getAllPics, uploadPost }

