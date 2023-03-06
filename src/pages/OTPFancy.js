import styles from './OTPFancy.module.css';
import { LogoImage, Initial, TabTitle } from '../GeneralFunctions.js';
import { useState, useEffect } from 'react';

export default function OTP() {

    function inputHandler(first, next) {
        if (first.value.length) {
            document.getElementById(next).focus();
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
                <input type="text" maxLength="1" id="first" className={styles.first} autoFocus />
                <input type="text" maxLength="1" id="second" className={styles.rest} />
                <input type="text" maxLength="1" id="third" className={styles.rest} />
                <input type="text" maxLength="1" id="fourth" className={styles.rest} />
                <input type="text" maxLength="1" id="fifth" className={styles.rest} />
                <input type="text" maxLength="1" id="sixth" className={styles.rest} />
                </div>
                <input className={styles.btn} type="Submit" defaultValue="Verify OTP" />
                <div className={styles.resend}>
                Didn't get an email? <a className={styles.resendLink} href="#">Resend Email</a>
                </div>
            </form>
        </div>

        </>
    );

}