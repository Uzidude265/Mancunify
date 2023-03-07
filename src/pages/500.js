import { Initial, TabTitle } from '../GeneralFunctions';
import styles from './ErrorPages.module.css';

export default function error500 () {
    TabTitle("Mancunify - 500");
    return (
        <>
            <Initial />
            <div className={styles.thePage}>
                <div className={styles.text}>
                    <div className={styles.errorType}>500</div>
                    <div className={styles.oops}>Oops! Something went wrong…</div>
                    <div className={styles.description}>
                        The server encountered a problem
                    </div>
                </div>
                <div className={styles.btn}>
                    <div className={styles.homepageBtn}>Homepage</div>
                    <div className={styles.goBackBtn}>Go Back</div>
                </div>
            </div>
        </>
    );
}