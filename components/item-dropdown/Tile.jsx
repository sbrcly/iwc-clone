import Image from "next/image"

import classes from "./tile.module.css"

export default function Tile({ tile }) {
    return (
        <div className={classes.tile}>
            <Image
                src={tile.image}
                alt={tile.title}
                width="300"
                height="300"
            />
            <h2 className={classes.title}>{tile.title}</h2>
        </div>
    )
};
