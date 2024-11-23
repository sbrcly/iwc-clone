import Image from "next/image"

import classes from "./pathItemDropdown.module.css"

import heroImg from "@/public/hero.jpeg"

export default function PathItemDropdown({ item }) {
    return (
        <div className={classes["dropdown-content"]}>
            <div className={classes["dropdown-content-main"]}>
                <h1>{item}</h1>
                <Image
                    src={heroImg}
                    width={200}
                    alt="Green Portofino Watch"
                />
            </div>
            <footer>
                <p>This is the footer...</p>
            </footer>
        </div>
    )
};
