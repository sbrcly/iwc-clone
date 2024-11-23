import { CiGlobe } from "react-icons/ci"

import classes from "./dropdownFooter.module.css"
import NavButtonItem from "../main-header/NavButtonItem"

export default function DropdownFooter() {
    return (
        <footer>
            <hr />
            <div className={classes.links}>
                <ul className={classes.list}>
                    <NavButtonItem title="Help & Contact" type="secondary" />
                    <NavButtonItem title="FAQ" type="secondary" />
                </ul>
                <ul className={classes.list}>
                    <li>
                        <p><CiGlobe /></p>
                        <p>English</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
};
