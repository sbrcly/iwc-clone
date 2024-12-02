import classes from "./accountDropdown.module.css"

export default function AccountDropdown() {
    return (
        <div className={classes.options}>
            <button className={classes.option}>Sign In</button>
            <button className={classes.option}>Register</button>
        </div>
    )
};
