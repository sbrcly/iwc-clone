import Link from "next/link"

import classes from "./pageLink.module.css"

export default function PageLink({ title, href }) {
    return (
        <li className={classes.item}>
            <Link href={href}>{title}</Link>
        </li>
    )
};
