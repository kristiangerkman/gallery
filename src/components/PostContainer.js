import React from "react";


const PostContainer = (props) => {
    return (
        <div className="postContainer">
            <Image url={props.url} />
        </div>
    )

}

export default PostContainer;