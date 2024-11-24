"use client"

import { useState, useEffect } from "react"
import { useModalContext } from "@/contexts/modalContext"
import { createPortal } from "react-dom"
import classes from "./navItem.module.css"

export default function NavPathItem({ title, id, type, children }) {
    const { modalState, updateState } = useModalContext()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleHover = () => {
        if (!modalState.hold) {
            updateState({
                isOpen: true,
                current: id,
                hold: false
            })
        }
    }

    const handleLeave = () => {
        if (!modalState.hold) {
            updateState({
                isOpen: false,
                current: '',
                hold: false
            })
        }
    }

    const isOpen = modalState.isOpen && modalState.current === id

    return (
        <>
            <li
                className={`${classes.item} ${classes[type]}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <h3>{title}</h3>
                {isClient && createPortal(
                    <>
                        <div onMouseEnter={handleLeave} className={`${classes["dropdown-backdrop"]} ${isOpen ? classes.show : ''}`}></div>
                        <div className={`${classes.dropdown} ${isOpen ? classes.show : ''}`}>
                            {children}
                        </div>
                    </>,
                    document.body
                )}
            </li>
        </>
    )
};
