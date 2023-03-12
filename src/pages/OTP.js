import styles from './OTP.module.css';
import { LogoImage, Initial, TabTitle } from '../GeneralFunctions.js';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OTP() {

    TabTitle("Mancunify - OTP");

    const navigate = useNavigate();
    const location = useLocation();

    const [code, setCode] = useState("");
    //  TEST VALUE
    const secretCode = "123456";

    function inputHandler(e) {
        e.preventDefault();
        if (e.target.value.length === 6) {
            setCode(e.target.value);
            e.target.value = "";
        }
    }

    useEffect(() => {

        //  If they somehow get to this website without submitting their email and password
        let email;
        let password;    
        try {
            email = location.state.email;
            password = location.state.password;
        }
        catch(e) {
            navigate("/403");
        }

        const errorBox = document.querySelector(`.${styles.errorBox}`);

        if (code.length === 6) {
            if (code === secretCode) {
                errorBox.style.display = "none";
                navigate("/create", {state: { email: email, password: password }});
            }
            else {
                errorBox.textContent = "Code Mismatch!";
                errorBox.style.display = "block";
            }
        }
    })

    return (
        <>
        <Initial/>
        <a href="/"><LogoImage style={styles}/></a>
        <div className={styles.verifyBox}>
            <h1 className={styles.title}>Verify Email:</h1>
            <div className={styles.verifyArea}>
                <div className={styles.errorBox}></div>
                <div className={styles.inputField}>
                <p>Enter your one time password:</p>
                <input type="text" maxLength="6" onChange={inputHandler}/>
                </div>
                <div className={styles.resend}>
                Didn't get an email? <a className={styles.resendLink} href="#">Resend Email</a>
                </div>
            </div>
        </div>
        </>
    );

}