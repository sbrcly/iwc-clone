"use client"

import classes from "./closeButton.module.css"
import { useModalContext } from "@/contexts/modalContext"

export default function CloseButton() {
    const { updateState } = useModalContext()

    const handleClick = () => {
        updateState({
            isOpen: false,
            current: '',
            hold: false
        })
    }

    return (
        <button onClick={handleClick} className={classes.close}>
            <span>Close</span>
            <span className={classes.x}>
                <div className={classes["line-one"]}></div>
                <div className={classes["line-two"]}></div>
            </span>
        </button>
    )
};
