import React from "react";
import s from "./users.module.css"
import axios from "axios";
import userPhoto from "./../../assets/images/149071.png"

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

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for( let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let pagesIndex = pages.length
        let arr = []

        return (
            <div>
                <div className={s.nav}>
                    {pages.filter(a => a===this.props.currentPage || a===this.props.currentPage+1 || a===this.props.currentPage+2 || a===this.props.currentPage-1 || a===this.props.currentPage-2)
                        .map( u =>
                        <span className={this.props.currentPage === u && s.pageActive}
                            onClick={() => { this.clickPage(u)}}>{u}</span>
                    )}
                </div>
                {
                    this.props.users.map(a => <div key={a.id}>
                        <div className={s.container}>
                            <div className={s.image}>
                                <img src={a.photos.small === null ? userPhoto : a.photos.small} alt=""/>
                                {a.follower ? <button className={s.on} onClick={() => {
                                    this.props.unfollow(a.id)
                                }}>Follow</button> : <button className={s.off} onClick={() => {
                                    this.props.follow(a.id)
                                }}>Unfollow</button>}
                            </div>
                            <div className={s.name}>
                                <div>{a.name}</div>
                                <div>{a.status}</div>
                            </div>
                            <div className={s.location}>
                                <div>Russia</div>
                                <div>Saratov</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}


export default UsersAPIComponent