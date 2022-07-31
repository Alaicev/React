import React from "react"
import Header from "./Header";
import {authMeCreater, Logout, setUserData} from "../../redux/auth-peducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{

    render() {
        return <Header auth={this.props.auth} logout={this.props.Logout}/>
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect (mapStateToProps, {setUserData, Logout}) (HeaderContainer)