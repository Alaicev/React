import React from "react"
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" width="50" height="50px" alt="logo"/>
            <div>
                {props.auth.isAuth?
                    <div>
                        {props.auth.login }
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    :
                    <div>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header