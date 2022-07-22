import React from "react";
import s from "./users.module.css"
import userPhoto from "./../../assets/images/149071.png"
import {NavLink} from "react-router-dom";

const AllUsers = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.nav}>
            {pages.filter(a => a === props.currentPage
                || a === props.currentPage + 1
                || a === props.currentPage + 2
                || a === props.currentPage - 1
                || a === props.currentPage - 2)
                .map(u =>
                    <span className={props.currentPage === u ? s.pageActive : null} key={u}
                          onClick={() => {
                              props.clickPage(u)
                          }}>{u}</span>
                )}
        </div>
        {
            props.users.map(a => <div key={a.id}>
                <div className={s.container}>

                    <div className={s.image}>
                        <NavLink to={`/${a.id}`}>
                            <img src={a.photos.small === null ? userPhoto : a.photos.small} alt=""/>
                        </NavLink>
                        {a.followed ?
                            <button disabled={props.followInProgress}
                                    className={s.on} onClick={() => {
                                props.unFollowUserThunkCreater(a.id)
                            }}>Follow</button> :
                            <button disabled={props.followInProgress}
                                    className={s.off} onClick={() => {
                                props.followUserThunkCreater(a.id)

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
}

export default AllUsers