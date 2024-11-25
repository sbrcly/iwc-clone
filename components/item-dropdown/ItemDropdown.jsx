import classes from "./itemDropdown.module.css"
import DropdownFooter from "./DropdownFooter.jsx"

export default function ItemDropdown({ id, type, children }) {
    return (
        <div className={`${classes["dropdown-content"]} ${classes[type]}`}>
            <div>
                {children}
            </div>
            <DropdownFooter id={id} />
        </div>
    )
}
