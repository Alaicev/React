import React from "react";
import s from "./users.module.css"
import axios from "axios";
import userPhoto from "./../../assets/images/149071.png"

const AllUsers = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/API/1.0/users")
                .then(data => props.setUsers(data.data.items))
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map( a => <div key={a.id}>
                    <div className={s.container}>
                        <div className={s.image}>
                            <img src={a.photos.small === null? userPhoto: a.photos.small} alt=""/>
                            {a.follower? <button className={s.on} onClick={() =>{props.unfollow(a.id)} }>Follow</button>: <button className={s.off} onClick={ () => {props.follow(a.id)}}>Unfollow</button>}
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

export default AllUsers