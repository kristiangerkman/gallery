import React from "react"
import PostContainer from "./PostContainer"


const Posts = (props) => {
    return (
        <div>
            {" "}
            {props.posts.map(p => (
                <PostContainer key={p.id} url={p.url} />
            ))}{" "}
        </div>
    )
}

export default Posts