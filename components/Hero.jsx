import Link from "next/link"

import Overlay from "@/components/UI/Overlay.jsx"
import classes from "./hero.module.css"
import Video from "./Video"

export default function Hero(params) {
    return (
        <section className={classes.hero}>
            <Video />
            <Overlay>
                <div className={classes["hero-content"]}>
                    <p className={classes.subtitle}>Watch Highlight</p>
                    <h1 className={classes.title}>Big Pilot’s Watch Perpetual Calendar</h1>
                    <Link href="/" className={classes["cta-button"]}>Discover now</Link>
                </div>
            </Overlay>
        </section>
    )
};
