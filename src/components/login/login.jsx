import React from "react";
import LoginForm from "./loginForm";
import {connect} from "react-redux";
import {LoginMe} from "../../redux/auth-peducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={"/"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm LoginMe={props.LoginMe} messageError={props.messageError}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        messageError: state.auth.messageError
    }
}

export default connect(mapStateToProps, {LoginMe})(Login)