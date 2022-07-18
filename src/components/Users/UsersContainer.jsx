import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPages,
    setTotalUsers,
    toggleIsFetching,
} from "../../redux/Users-reducer";
import axios from "axios";
import AllUsers from "./AllUsers"
import reactLogo from "./../../logo.svg"
import s from "./users.module.css"

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/API/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.data.items)
                this.props.setTotalUsers(data.data.totalCount)
            })

    }

    clickPage = (u) => {
        this.props.setCurrentPages(u)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/API/1.0/users?page=${u}&count=${this.props.pageSize}`)
            .then(data => {
                this.props.setUsers(data.data.items)
                this.props.toggleIsFetching(false)
            })

    }


    render() {
        return <>
            {this.props.isFetching ? <img src={reactLogo} className={s.imageAnimation}/> :
                <AllUsers currentPage={this.props.currentPage}
                          pageSize={this.props.pageSize}
                          totalUserCount={this.props.totalUserCount}
                          users={this.props.users}
                          clickPage={this.clickPage}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                />
            }
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.allUsersPage.users,
        pageSize: state.allUsersPage.pageSize,
        totalUserCount: state.allUsersPage.totalUserCount,
        currentPage: state.allUsersPage.currentPage,
        isFetching: state.allUsersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         currentPageSet: (number) => {
//             dispatch(currentPageAC(number))
//         },
//         totalUsersSet: (number) => {
//             dispatch(totalUsersAC(number))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPages,
    setTotalUsers,
    toggleIsFetching
})(UsersAPIComponent)
export default UsersContainer