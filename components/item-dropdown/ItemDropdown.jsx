import Image from "next/image"

import classes from "./itemDropdown.module.css"

import heroImg from "@/public/hero.jpeg"
import DropdownFooter from "./DropdownFooter.jsx"

export default function ItemDropdown({ item }) {
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
            <DropdownFooter />
        </div>
    )
}
