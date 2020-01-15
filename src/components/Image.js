import React, { useState } from "react"
import imagePlaceholder from "../404.png"

/* function imageExists(url, callback) {
    var img = new Image();
    img.onload = function () { callback(true); };
    img.onerror = function () { callback(false); };
    img.src = url;
} */

const Image = (props) => {
    var src = props.url

    const imgError = (image) => {
        image.target.src = imagePlaceholder
        return true
    }

    return (
        <img className="image" src={src} onError={imgError} alt="a" />
    )
}

export default Image