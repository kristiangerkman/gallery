import React from "react"
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <div>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/posts">
                <p>Posts</p>
            </Link>
            <Link to="/create">
                <p>Create</p>
            </Link>
            <Link to="/login">
                <p>Login</p>
            </Link>
        </div>
    )
}

export default MenuBar