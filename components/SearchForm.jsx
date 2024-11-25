import Form from "next/form"
import Link from "next/link"
import { IoIosSearch } from "react-icons/io"

import classes from "./searchForm.module.css"

export default function SearchForm(params) {
    return (
        <Form className={classes.form}>
            <div className={classes["input-container"]}>
                <input
                    className={classes.input}
                    name="search"
                    type="text"
                    placeholder="Type in the key words"
                />
                <Link className={classes.search} href="/"><IoIosSearch /></Link>
            </div>
        </Form>
    )
};
