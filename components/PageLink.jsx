"use client"

import Link from "next/link"

import classes from "./pageLink.module.css"
import { useModalContext } from "@/contexts/modalContext"

export default function PageLink({ title, href }) {
    const { updateState } = useModalContext()

    const handleClick = () => {
        updateState({
            isOpen: false,
            current: '',
            hold: false
        })
    }

    return (
        <li
            onClick={handleClick}
            className={classes.item}
        >
            <Link href={href}>{title}</Link>
        </li>
    )
};
