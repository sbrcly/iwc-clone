import Image from "next/image"

import classes from "./pathItemDropdown.module.css"

import heroImg from "@/public/hero.jpeg"

export default function PathItemDropdown({ item }) {
    return (
        <div className={classes["dropdown-content"]}>
            <h1>{item}</h1>
            <Image
                src={heroImg}
                width={200}
                alt="Green Portofino Watch"
            />
        </div>
    )
};
