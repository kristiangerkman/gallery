import React from "react"
import PostContainer from "./PostContainer"


const Posts = (props) => {
    return (
        <div className="contentContainer">
            {" "}
            {props.posts.map(p => (
                <PostContainer key={p.id} url={p.url} />
            ))}{" "}
        </div>
    )
}

export default Posts