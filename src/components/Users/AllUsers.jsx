import React from "react";
import s from "./users.module.css"

const AllUsers = (props) => {
    return (
        <div>
            {
                props.users.map( a => <div key={a.id}>
                    <div className={s.container}>
                        <div className={s.image}>
                            <img src={a.photo} alt=""/>
                            {a.follower? <button className={s.on} onClick={() =>{props.unfollow(a.id)} }>Follow</button>: <button className={s.off} onClick={ () => {props.follow(a.id)}}>Unfollow</button>}
                        </div>
                        <div className={s.name}>
                            <div>{a.userName}</div>
                            <div>{a.cite}</div>
                        </div>
                        <div className={s.location}>
                            <div>{a.location.country}</div>
                            <div>{a.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default AllUsers