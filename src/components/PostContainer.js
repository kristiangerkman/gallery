import React from "react";
import Image from "./Image"


const PostContainer = (props) => {
    return (
        <div className="postContainer">
            <Image url={props.url} />
        </div>
    )

}

export default PostContainer;