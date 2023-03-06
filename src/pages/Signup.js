import styles from './Signup.module.css';
import { LogoImage, Initial, TabTitle } from '../GeneralFunctions.js';
import { useEffect, useState } from 'react';

export default function Login() {

    TabTitle("Mancunify - Signup");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
        setRePassword(e.target.rePassword.value);
    }

    useEffect(() => {

        //  Get the error box class
        const errorBox = document.querySelector(`.${styles.errorBox}`);

        //  Regex for student email
        const regex = /[\w-]+@student.manchester.ac.uk/;

        //  React runs this function on page start so this prevents that
        if (email !== "" && password !== "" && rePassword !== "") {

            //  If passwords do not match, show error
            if (password !== rePassword) {
                errorBox.textContent = "Passwords do not match";
                errorBox.style.display = "block";
            }
            //  If email is not a student email, show error
            else if (!regex.test(email)) {
                errorBox.textContent = "Email is not a student email";
                errorBox.style.display = "block";
            }

            //  Need to attempt to send email here somehow
            //  If email didn't go through, show error
            else if (email === "failed@student.manchester.ac.uk") {
                errorBox.textContent = "Email is invalid";
                errorBox.style.display = "block";
            }
            //  If email is valid and passwords match, redirect to OTP page (needs to be made)
            else {
                errorBox.textContent = "Email Sent!";
                errorBox.style.display = "block";
            }

        }

    })

    return (
        <>
        <Initial/>

        <a href="/"><LogoImage style={styles}/></a>
        <div className={styles.signupBox}>
            <h1 className={styles.title}>Sign Up:</h1>
            <form className={styles.signupArea} onSubmit={handleSubmit}>
                <div className={styles.errorBox}>Test</div>
                <div className={styles.inputField}>
                <label>University Email</label>
                <input type="text" name="email" required />
                </div>
                <div className={styles.inputField}>
                <label>Password</label>
                <input type="password" name="password" required />
                </div>
                <div className={styles.inputField}>
                <label>Retype Password</label>
                <input type="password" name="rePassword" required />
                </div>
                <input className={styles.btn} type="Submit" defaultValue="Login" />
                <div className={styles.login}>
                Already have an account? <a className={styles.loginLink} href="/login">Log in</a>
                </div>
            </form>
        </div>

        </>
    );
}