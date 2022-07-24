import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let RedirectmapStateToProps = (state) => {
    return  {
        auth: state.auth.isAuth
    }
}

const withAuthRedirect = (Conponent) => {
    class RedirectContainer extends React.Component {
        render() {
            if (!this.props.auth) {
                return <Navigate  to="/login" />
            }
            return <Conponent {...this.props} />
        }
    }
    const connectedWithAuthRedirect = connect(RedirectmapStateToProps)(RedirectContainer)
    return connectedWithAuthRedirect
}




export default withAuthRedirect