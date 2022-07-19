import React from "react"
import Header from "./Header";
import axios from "axios";
import {setUserData} from "../../redux/auth-peducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0//auth/me", {withCredentials: true})
            .then(data => {
                if (data.data.resultCode === 0) {
                    let {id, email, login,} = data.data.data
                    this.props.setUserData(id, email, login)
                }
            })
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

export default connect (mapStateToProps, {setUserData}) (HeaderContainer)