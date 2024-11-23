import Image from "next/image"

import iwcLogo from "@/public/iwc_logo_transparent.png"

import classes from "./mainHeader.module.css"
import NavPathItem from "./NavPathItem"
import NavButtonItem from "./NavButtonItem"
import PathItemDropdown from "./PathItemDropdown"

const navPathItems = [
    'Watches',
    'Accessories',
    'Service',
    'More'
]

const navButtonItems = [
    'Search',
    'Account',
    'Cart'
]

export default function MainHeader() {
    return (
        <>
            <header className={classes.header}>
                <nav className={classes["header-content"]}>
                    <ul className={classes.paths}>
                        {navPathItems.map(item => {
                            return (
                                <NavPathItem key={item} title={item}>
                                    <PathItemDropdown
                                        item={item}
                                    />
                                </NavPathItem>
                            )
                        })}
                    </ul>
                    <div className={classes.logo}>
                        <Image
                            src={iwcLogo}
                            alt="IWC Schaffhausen Logo"
                            width={125}
                            priority
                        />
                    </div>
                    <ul className={classes.links}>
                        {navButtonItems.map(item => {
                            return (
                                <NavButtonItem key={item} title={item} />
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
};
