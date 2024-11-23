import Link from "next/link"

import Overlay from "@/components/Overlay"
import classes from "./hero.module.css"

export default function Hero(params) {
    return (
        <section className={classes.hero}>
            <video className={classes.video} muted autoPlay playsInline loop preload="none">
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
