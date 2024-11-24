"use client"

import Image from "next/image"

import classes from "./tile.module.css"
import Link from "next/link"
import { useModalContext } from "@/contexts/modalContext"

export default function Tile({ tile }) {
    const { updateState } = useModalContext()

    const handleClick = () => {
        updateState({
            isOpen: false,
            current: '',
            hold: false
        })
    }

    return (
        <div
            onClick={handleClick}
            className={classes.tile}
        >
            <Link href={tile.href}>
                <div className={classes["image-wrapper"]}>
                    <Image
                        className={classes.image}
                        src={tile.image}
                        alt={tile.title}
                        width="275"
                        height="275"
                    />
                </div>
                <h2 className={classes.title}>{tile.title}</h2>
            </Link>
        </div>
    )
};
