import { Initial, TabTitle } from '../GeneralFunctions';
import styles from './ErrorPages.module.css';

export default function Error429 () {
    TabTitle("Mancunify - 429");

    const goBack = () => {
        window.history.back();
    }
    const goToDashboard = () => {
        window.location.href = '/dashboard';
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
                    <button type="button" className={styles.myDashboardBtn} onClick={goToDashboard}>My Dashboard</button>
                    <button type="button" className={styles.goBackBtn} onClick={goBack}>Go Back</button>
                </div>
            </div>
        </>
    );
}