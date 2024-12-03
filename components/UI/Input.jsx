import classes from "./input.module.css"

export default function Input({ type, placeholder, label, name }) {
    return (
        <div className={classes["input-container"]}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
};
