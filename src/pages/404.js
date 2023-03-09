import { Initial, TabTitle } from '../GeneralFunctions';
import styles from './ErrorPages.module.css';

export default function Error404 () {
    TabTitle("Mancunify - 404");
    return (
        <>
            <Initial />
            <div className={styles.thePage}>
                <div className={styles.text}>
                    <div className={styles.errorType}>404</div>
                    <div className={styles.oops}>Oops! Something went wrong…</div>
                    <div className={styles.description}>
                        The server could not find the page you requested
                    </div>
                </div>
                <div className={styles.btn}>
                    <div className={styles.homepageBtn}>My Dashboard</div>
                    <div className={styles.goBackBtn}>Go Back</div>
                </div>
            </div>
        </>
    );
}