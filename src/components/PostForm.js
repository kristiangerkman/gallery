import React from "react"
import postService from "../postService"

const PostForm = (props) => {

    const handleSubmit = event => {
        event.preventDefault();
        const createID = () => {
            return Math.random * (999999 - 100) + 100;
        }

        const req = {
            title: event.target.title.value,
            url: event.target.url.value,
            id: createID()
        }

        postService.uploadPost(req)


    }
    return (

        <form onSubmit={handleSubmit}>
            Title:<br />
            <input type="text" name="title"></input> <br /> <br />
            URL:<br />
            <input type="text" name="url"></input> <br /> <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default PostForm