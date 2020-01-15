import React from "react"
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <div className="menuBar">
            <Link className="menuLink" to="/">
                <p>Home</p>
            </Link>
            <Link className="menuLink" to="/posts">
                <p>Posts</p>
            </Link>
            <Link className="menuLink" to="/create">
                <p className="hover">Create</p>
            </Link>
            <Link className="menuLink" to="/login">
                <p>Login</p>
            </Link>
        </div>
    )
}

export default MenuBar