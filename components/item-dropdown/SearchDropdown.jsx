import classes from "./searchDropdown.module.css"

import Tile from "./Tile.jsx"

import { HEADER_OPTIONS } from "@/data"

export default function SearchDropdown(params) {
    const collections = HEADER_OPTIONS.watches.tiles.filter(tile => tile.id !== "all")

    console.log(collections)

    return (
        <div className={classes.content}>
            <div className={classes["tiles-container"]}>
                <ul className={classes.tiles}>
                    {collections.map(collection => {
                        return (
                            <Tile
                                key={collection.id}
                                imgSource="altImage"
                                tile={collection}
                                size="400"
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};
