"use client"

import { useState } from "react"

import classes from "./accountDropdown.module.css"

export default function AccountDropdown() {
    const [selectedOption, setSelectedOption] = useState("sign_in")

    const handleSelectOption = (target) => {
        setSelectedOption(target)
    }

    return (
        <div className={classes.options}>
            <button
                id="sign_in"
                onClick={(e) => handleSelectOption(e.target.id)}
                className={classes.option}
            >Sign In</button>
            <button
                id="register"
                onClick={(e) => handleSelectOption(e.target.id)}
                className={classes.option}
            >Register</button>
        </div>
    )
};
