import React from "react"
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";


const NavBar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/" className = { a => a.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className = { a => a.isActive ? s.active : s.item }>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className = { a => a.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = { a => a.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className = { a => a.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className = { a => a.isActive ? s.active : s.item }>Users</NavLink>
            </div>
        </nav>
    )
}

export default NavBar