import styles from './Login.module.css';
import Logo from '../images/logo.png';
import {Initial, TabTitle} from '../GeneralFunctions.js';

export default function Login() {
    TabTitle("Mancunify - Login");
    return (
        <>
        <Initial/>

        <a href="/"><img src={Logo} alt="Mancunify Logo" className={styles.logo}/></a>
        <div className={styles.loginBox}>
            <h1 className={styles.title}>Login:</h1>
            <form className={styles.loginArea}>
                <div className={styles.inputField}>
                <label>Username</label>
                <input type="text" required />
                </div>
                <div className={styles.inputField}>
                <label>Password</label>
                <input type="password" required />
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