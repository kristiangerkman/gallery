import axios from "axios"
const baseUrl = "http://localhost:3002/posts"

const getAllPics = async () => {
    const res = await axios.get(baseUrl);
    return res
}

export default { getAllPics }

