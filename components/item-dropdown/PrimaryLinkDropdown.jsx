import classes from "./primaryLinkDropdown.module.css"

import { HEADER_OPTIONS } from "@/data"
import Tile from "./Tile"

export default function PrimaryLinkDropdown({ id }) {
    const data = HEADER_OPTIONS[id]

    if (!data) {
        return
    }

    return (
        <div className={classes.content}>
            <h1 className={classes.title}>{data.title}</h1>
            <div className={classes.main}>
                <div className={classes["tiles-container"]}>
                    <ul className={classes.tiles}>
                        {data.tiles.map(tile => {
                            return (
                                <Tile key={tile.id} tile={tile} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};
