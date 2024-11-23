"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import classes from "./navItem.module.css"

export default function NavButtonItem({ title, type, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleClick = () => {
        setIsOpen(true)
    }

    return (
        <li
            onClick={handleClick}
            className={`${classes.item} ${classes[type]}`}
        >
            <h3
                className={typeof title === 'object' ? classes.icon : ''}
            >{title}</h3>

            {isClient && createPortal(
                <>
                    <div className={`${classes["dropdown-backdrop"]} ${isOpen ? classes.show : ''}`}></div>
                    <div className={`${classes.dropdown} ${isOpen ? classes.show : ''}`}>
                        {children}
                    </div>
                </>,
                document.body
            )}
        </li>
    )
};