import classes from "./closeButton.module.css"

export default function CloseButton() {
    return (
        <button className={classes.close}>
            <span>Close</span>
            <span className={classes.x}>
                <div className={classes["line-one"]}></div>
                <div className={classes["line-two"]}></div>
            </span>
        </button>
    )
};
