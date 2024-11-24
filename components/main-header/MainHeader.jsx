import Image from "next/image"
import { MdOutlineShoppingBag } from "react-icons/md"

import iwcLogo from "@/public/iwc_logo_transparent.png"

import classes from "./mainHeader.module.css"
import NavPathItem from "./NavPathItem"
import NavButtonItem from "./NavButtonItem"
import ItemDropdown from "../item-dropdown/ItemDropdown.jsx"
import Link from "next/link"
import PrimaryLinkDropdown from "../item-dropdown/PrimaryLinkDropdown"
import SearchDropdown from "../item-dropdown/SearchDropdown"
import AccountDropdown from "../item-dropdown/AccountDropdown"

const navPathItems = [
    'Watches',
    'Accessories',
    'Service',
    'More'
]

const navButtonItems = [
    { id: 'search', content: 'Search' },
    { id: 'account', content: 'Account' },
    { id: 'cart', content: <MdOutlineShoppingBag /> }
]

export default function MainHeader() {
    return (
        <>
            <header className={classes.header}>
                <nav className={classes["header-content"]}>
                    <ul className={classes.paths}>
                        {navPathItems.map(item => {
                            return (
                                <NavPathItem key={item} title={item} type="primary">
                                    <ItemDropdown item={item}>
                                        <PrimaryLinkDropdown item={item} />
                                    </ItemDropdown>
                                </NavPathItem>
                            )
                        })}
                    </ul>
                    <div className={classes.logo}>
                        <Link href="/">
                            <Image
                                src={iwcLogo}
                                alt="IWC Schaffhausen Logo"
                                width={125}
                                priority
                            />
                        </Link>
                    </div>
                    <ul className={classes.links}>
                        {navButtonItems.map(item => {
                            return (
                                <NavButtonItem key={item.id} id={item.id} title={item.content} type="primary">
                                    <ItemDropdown item={item}>
                                        {item.id === 'search' && (
                                            <SearchDropdown />
                                        )}

                                        {item.id === 'account' && (
                                            <AccountDropdown />
                                        )}
                                    </ItemDropdown>
                                </NavButtonItem>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
}
