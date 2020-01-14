import React, { useState } from "react"
import imagePlaceholder from "../404.png"

/* function imageExists(url, callback) {
    var img = new Image();
    img.onload = function () { callback(true); };
    img.onerror = function () { callback(false); };
    img.src = url;
} */

const Image = (props) => {
    /*     const [bool, setBool] = useState(false);
    
        () => imageExists(props.url, function (bool) { setBool(bool) });
    
     */
    if (1) {
        return (
            <img class="image" src={props.url} alt="asd" />
        )
    } else {
        return (
            <img class="image" src={imagePlaceholder} alt="asdasda" />
        )
    }
}

export default Image