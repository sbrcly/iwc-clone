import Link from "next/link"

import classes from "./linkListItem.module.css"

export default function LinkListItem({ link }) {
    return (
        <li className={classes["list-item"]}>
            <Link href={link.href}>{link.content}</Link>
        </li>
    )
};
