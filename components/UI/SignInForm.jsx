import Input from "./Input"

import classes from "./signInForm.module.css"

export default function SignInForm(params) {
    return (
        <form className={classes.form} action="">
            <Input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                label="Email"
            />
            <Input
                type="text"
                name="password"
                placeholder="Enter Your Password"
                label="Password"
            />
            <button className={classes["forgot-password"]}>Forgot your password?</button>
            <button className={classes["sign-in"]}>Sign In</button>
            <button className={classes["forum-registration"]}>Forum Registration</button>
        </form>
    )
};
