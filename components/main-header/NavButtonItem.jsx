"use client"

import { useState, useEffect } from "react"
import { useModalContext } from "@/contexts/modalContext"
import { createPortal } from "react-dom"
import classes from "./navItem.module.css"

export default function NavButtonItem({ title, type, children }) {
    const { modalState, updateState } = useModalContext()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleClick = () => {
        updateState({
            isOpen: !modalState.isOpen,
            current: !modalState.isOpen ? title : ''
        })
    }

    const isOpen = modalState.isOpen && modalState.current === title

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