import classes from "./primaryLinkDropdown.module.css"

import { HEADER_OPTIONS } from "@/data"
import Tile from "./Tile"
import LinkList from "../LinkList"

export default function PrimaryLinkDropdown({ id }) {
    const data = HEADER_OPTIONS[id]

    if (!data) return

    const linkListClass = data.linkLists?.length > 1 ? "multiple" : "single"

    return (
        <div className={classes.content}>
            <h1 className={classes.title}>{data.title}</h1>
            <div className={classes.main}>
                <div className={classes["tiles-container"]}>
                    <ul className={classes.tiles}>
                        {data.tiles.map(tile => {
                            return (
                                <Tile
                                    key={tile.id}
                                    imgSource="image"
                                    tile={tile}
                                    size="275"
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className={`${classes["link-lists"]} ${classes[linkListClass]}`}>
                    {data.linkLists && data.linkLists.map(list => {
                        return (
                            <LinkList key={list.id} data={list} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
