import React from "react"

const Login = (props) => {
    return (
        <div>
            <form>
                Username:
                <input type="text" name="username" value=""></input> <br /><br />
                Password:
                <input type="password" name="password" value=""></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login