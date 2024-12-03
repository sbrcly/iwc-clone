"use client"

import { useState } from "react"

import classes from "./accountDropdown.module.css"
import SignInForm from "../UI/SignInForm"
import RegisterForm from "../UI/RegisterForm"

export default function AccountDropdown() {
    const [selectedOption, setSelectedOption] = useState("sign_in")

    const handleSelectOption = (target) => {
        setSelectedOption(target)
    }

    const formContent = selectedOption === 'sign_in' ? <SignInForm /> : <RegisterForm />

    return (
        <>
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
            <div className={classes["form-container"]}>
                { formContent }
            </div>
        </>
    )
};
