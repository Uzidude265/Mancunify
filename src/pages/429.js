import { Initial, TabTitle } from '../GeneralFunctions';
import styles from './ErrorPages.module.css';
import { Link } from 'react-router-dom';

export default function Error429 () {
    TabTitle("Mancunify - 429");

    const goBack = () => {
        window.history.back();
    }

    return (
        <>
            <Initial />
            <div className={styles.thePage}>
                <div className={styles.text}>
                    <div className={styles.errorType}>429</div>
                    <div className={styles.oops}>Oops! Something went wrong…</div>
                    <div className={styles.description}>
                        Too Many Requests
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