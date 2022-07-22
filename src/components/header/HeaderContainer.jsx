import React from "react"
import Header from "./Header";
import {authMeCreater, setUserData} from "../../redux/auth-peducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authMeCreater()
    }

    render() {
        return <Header auth={this.props.auth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect (mapStateToProps, {setUserData, authMeCreater}) (HeaderContainer)