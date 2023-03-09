import { Initial, TabTitle } from '../GeneralFunctions';
import styles from './ErrorPages.module.css';
import { Link } from 'react-router-dom';

export default function Error403 () {
    TabTitle("Mancunify - 403");

    const goBack = () => {
        window.history.back();
    }

    return (
        <>
            <Initial />
            <div className={styles.thePage}>
                <div className={styles.text}>
                    <div className={styles.errorType}>403</div>
                    <div className={styles.oops}>Oops! Something went wrong…</div>
                    <div className={styles.description}>
                        No permissions to access the wanted page
                    </div>
                </div>
                <div className={styles.btn}>
                    <Link to="/dashboard">
                        <button type="button" className={styles.homepageBtn}>My Dashboard</button>
                    </Link>

                    <button type="button" className={styles.goBackBtn} onClick={goBack}>Go Back</button>
                </div>
            </div>
        </>
    );
}