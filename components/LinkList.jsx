import LinkListItem from "./LinkListItem"

import classes from "./linkList.module.css"

export default function LinkList({ data }) {
    return (
        <div>
            <h3 className={classes.title}>{data.title}</h3>
            <ul className={classes["link-list"]}>
                {data.links.map(link => {
                    return (
                        <LinkListItem key={link.id} link={link} />
                    )
                })} 
            </ul>
        </div>
    )
};
