import React from "react";
import reactLogo from "../../logo.svg";
import s from "../Users/users.module.css";

let Preloader = (props) => {
    return (
        <div>
            <img src={reactLogo} className={s.imageAnimation} alt={""} />
        </div>
    )
}

export default Preloader