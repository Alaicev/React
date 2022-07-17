import React from "react";
import {connect} from "react-redux";
import {currentPageAC, followAC, setUsersAC, totalUsersAC, unfollowAC} from "../../redux/Users-reducer";
import axios from "axios";
import AllUsers from "./AllUsers";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/API/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.totalUsersSet(data.data.totalCount)
            })

    }

    clickPage = (u) => {
        this.props.currentPageSet(u)
        axios
            .get(`https://social-network.samuraijs.com/API/1.0/users?page=${u}&count=${this.props.pageSize}`)
            .then(data => (this.props.setUsers(data.data.items)))

    }


    render() {
        return <AllUsers currentPage={this.props.currentPage}
                         pageSize={this.props.pageSize}
                         totalUserCount={this.props.totalUserCount}
                         users={this.props.users}
                         clickPage={this.clickPage}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
        />

    }
}


let mapStateToProps =(state) =>{
    return {
        users: state.allUsersPage.users,
        pageSize: state.allUsersPage.pageSize,
        totalUserCount: state.allUsersPage.totalUserCount,
        currentPage: state.allUsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        currentPageSet: (number) => {
            dispatch(currentPageAC(number))
        },
        totalUsersSet: (number) => {
            dispatch(totalUsersAC(number))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)
export default UsersContainer