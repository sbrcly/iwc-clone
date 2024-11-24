import classes from "./itemDropdown.module.css"
import DropdownFooter from "./DropdownFooter.jsx"

export default function ItemDropdown({ item, children }) {
    return (
        <div className={classes["dropdown-content"]}>
            <div className={classes["dropdown-content-main"]}>
                {children}
            </div>
            <DropdownFooter item={item} />
        </div>
    )
}
