import React from "react"
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";


const NavBar = (props) => {

    let navigation = props.nav.map( n =>
        <div className={s.item}>
            <NavLink to={n.link} className = { a => a.isActive ? s.active : s.item }>{n.nameLink}</NavLink>
        </div>
    )

    return (
        <nav className={s.nav}>
            {navigation}
        </nav>
    )
}

export default NavBar