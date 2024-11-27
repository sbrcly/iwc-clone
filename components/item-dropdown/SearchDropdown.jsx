import CloseButton from "../CloseButton"
import SearchForm from "../SearchForm"
import classes from "./searchDropdown.module.css"

import Tile from "./Tile.jsx"

import { HEADER_OPTIONS } from "@/data"

export default function SearchDropdown() {
    const collections = HEADER_OPTIONS.watches.tiles.filter(tile => tile.id !== "all")

    return (
        <div className={classes.content}>
            <div className={classes["button-container"]}>
                <CloseButton />
            </div>
            <div className={classes["form-container"]}>
                <SearchForm />
                <hr />
            </div>
            <div className={classes["tiles-container"]}>
                <ul className={classes.tiles}>
                    {collections.map(collection => {
                        return (
                            <Tile
                                key={collection.id}
                                imgSource="altImage"
                                tile={collection}
                                size="250"
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};
