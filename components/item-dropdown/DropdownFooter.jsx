import { CiGlobe } from "react-icons/ci"

import classes from "./dropdownFooter.module.css"
import NavButtonItem from "../main-header/NavButtonItem.jsx"
import PageLink from "../PageLink.jsx"
import HelpAndContactDropdown from "./HelpAndContactDropdown.jsx"

export default function DropdownFooter({ item }) {
    return (
        <footer>
            <hr />
            <div className={classes.links}>
                <ul className={classes.list}>
                    <NavButtonItem key="Help & Contact" id={`hc-${item}`} title="Help & Contact" type="secondary">
                        <div className={classes["dropdown-content"]}>
                            <div className={classes["dropdown-content-main"]}>
                                <HelpAndContactDropdown />
                            </div>
                        </div>
                    </NavButtonItem>
                    <PageLink title="FAQ" href="/faq" />
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
