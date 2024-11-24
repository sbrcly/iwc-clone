"use client"

import { useState, useEffect } from "react"
import { useModalContext } from "@/contexts/modalContext"
import { createPortal } from "react-dom"
import classes from "./navItem.module.css"

export default function NavPathItem({ title, children }) {
    const { state, updateState } = useModalContext()

    console.log('State: ', state)
    console.log('UpdateState: ', updateState)
    
    const [isHovering, setIsHovering] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleHover = () => {
        setIsHovering(true)
    }

    const handleLeave = () => {
        setIsHovering(false)
    }

    return (
        <>
            <li
                className={classes.item}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
            >
                <h3>{title}</h3>
                {isClient && createPortal(
                    <>
                        <div onMouseEnter={handleLeave} className={`${classes["dropdown-backdrop"]} ${isHovering ? classes.show : ''}`}></div>
                        <div className={`${classes.dropdown} ${isHovering ? classes.show : ''}`}>
                            {children}
                        </div>
                    </>,
                    document.body
                )}
            </li>
        </>
    )
};
