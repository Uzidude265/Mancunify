import { Initial, TabTitle } from '../GeneralFunctions';
import { Sidebar } from './Template';
import styles from './Account.module.css';
import template from './Template.module.css';

export default function Account () {
    TabTitle("Mancunify - Account");
    return (
        <>
        <Initial />
        <div className={template.infoArea}>
        <h1 className={styles.dummyTitle}>Account</h1>
        </div>
        <Sidebar pageName={"My Account"}/>
        </>
    );
}