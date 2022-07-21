import React from "react"
import Header from "./Header";
import axios from "axios";
import {setUserData} from "../../redux/auth-peducer";
import {connect} from "react-redux";
import {Auth} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        Auth()
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