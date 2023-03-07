import styles from './OTP.module.css';
import { LogoImage, Initial, TabTitle } from '../GeneralFunctions.js';
import { useState, useEffect } from 'react';

export default function OTP() {

    //  TEST VALUE
    const testCode = "123456";

    function inputHandler(e) {
        if (e.target.value.length === 6) {
            const errorBox = document.querySelector(`.${styles.errorBox}`);
            const code = e.target.value;
            if (code === testCode) {
                errorBox.textContent = "Code Matches!";
                errorBox.style.display = "block";
            }
            else {
                errorBox.textContent = "Code Mismatch!";
                errorBox.style.display = "block";
            }
            e.target.value = "";
        }
    }

    TabTitle("Mancunify - OTP");

    return (
        <>
        <Initial/>

        <a href="/"><LogoImage style={styles}/></a>
        <div className={styles.verifyBox}>
            <h1 className={styles.title}>Verify Email:</h1>
            <form className={styles.verifyArea}>
                <div className={styles.errorBox}></div>
                <div className={styles.inputField}>
                <p>Enter your one time password:</p>
                <input type="text" maxLength="6" onChange={inputHandler}/>
                </div>
                <div className={styles.resend}>
                Didn't get an email? <a className={styles.resendLink} href="#">Resend Email</a>
                </div>
            </form>
        </div>

        </>
    );

}