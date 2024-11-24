"use client"

import { useState, useEffect } from "react"
import { useModalContext } from "@/contexts/modalContext"
import { createPortal } from "react-dom"
import classes from "./navItem.module.css"

export default function NavButtonItem({ title, id, type, children }) {
    const { modalState, updateState } = useModalContext()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleClick = () => {
        const hold = !(modalState.isOpen && modalState.current === id)
        const updateIsOpen = modalState.current === id || modalState.current === '' ? !modalState.isOpen : modalState.isOpen

        updateState({
            isOpen: updateIsOpen,
            current: !modalState.isOpen || modalState.current !== id ? id : '',
            hold: hold
        })
    }

    const isOpen = modalState.isOpen && modalState.current === id

    return (
        <li
            className={`${classes.item} ${classes[type]}`}
        >
            <h3
                onClick={handleClick}
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