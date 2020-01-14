import React from "react"
import { imageChecker } from "../imageChecker"
import imagePlaceholder from "../404.png"

const Image = (props) => {
    console.log(imageChecker(props.url))
    if (imageChecker(props.url)) {
        return (
            <img src={props.url} />
        )
    } else {
        return (
            <img src={imagePlaceholder} alt="asdasda" />
        )
    }
}

export default Image