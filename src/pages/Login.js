import styles from './Login.module.css';
import { LogoImage, Initial, TabTitle } from '../GeneralFunctions.js';
import { useEffect, useState } from 'react';

export default function Login() {

    TabTitle("Mancunify - Login");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(e.target.username.value);
        setPassword(e.target.password.value);
    }

    useEffect(() => {

        //  Get the error box class
        const errorBox = document.querySelector(`.${styles.errorBox}`);

        //  Database checks should go here:
        //  React runs this function on page start so this prevents that
        if (username !== "" && password !== "") {

            //  If username and password not in database, show error
            if (username === "error" && password === "error") {
                errorBox.textContent = "Username or password is incorrect";
                errorBox.style.display = "block";
            }
            //  If username and password are valid, redirect to dashboard
            else {
                errorBox.style.display = "none";
                window.location.href = './dashboard';
            }

        }

    })

    return (
        <>
        <Initial/>

        <a href="/"><LogoImage style={styles}/></a>
        <div className={styles.loginBox}>
            <h1 className={styles.title}>Login:</h1>
            <form className={styles.loginArea} onSubmit={handleSubmit}>
                <div className={styles.errorBox}></div>
                <div className={styles.inputField}>
                <label>Username</label>
                <input type="text" name="username" required />
                </div>
                <div className={styles.inputField}>
                <label>Password</label>
                <input type="password" name="password" required />
                </div>
                <input className={styles.btn} type="Submit" defaultValue="Login" />
                <div className={styles.signup}>
                Don't have an account? <a className={styles.signupLink} href="/signup">Sign Up</a>
                </div>
            </form>
        </div>

        </>
    );
}