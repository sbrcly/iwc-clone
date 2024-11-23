import classes from "./navItem.module.css"

export default function NavButtonItem({ title }) {
    return (
        <li className={classes.item}>
            <h3>{title}</h3>
            
        </li>
    )
};