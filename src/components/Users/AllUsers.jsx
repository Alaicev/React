import React from "react";
import s from "./users.module.css"
import userPhoto from "./../../assets/images/149071.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

const AllUsers = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.nav}>
            {pages.filter(a => a === props.currentPage || a === props.currentPage + 1 || a === props.currentPage + 2 || a === props.currentPage - 1 || a === props.currentPage - 2)
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
                        {a.followed ? <button className={s.on} onClick={() => {
                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${a.id}`,  {
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': '6de1bc83-97a4-4e32-8899-9275628755ab'
                                    }
                                })
                                .then(response =>{
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(a.id)
                                    }
                                })

                        }}>Follow</button> : <button className={s.off} onClick={() => {
                            axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${a.id}`, {}, {
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': '6de1bc83-97a4-4e32-8899-9275628755ab'
                                    }
                                })
                                .then(response =>{
                                    if (response.data.resultCode === 0) {
                                        props.follow(a.id)
                                    }
                                })

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