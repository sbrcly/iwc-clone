import Image from "next/image"

import classes from "./tile.module.css"
import Link from "next/link"

export default function Tile({ tile }) {
    return (
        <div className={classes.tile}>
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
