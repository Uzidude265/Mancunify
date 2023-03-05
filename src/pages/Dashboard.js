import { Initial, TabTitle } from '../GeneralFunctions';
import { Sidebar } from './Template';
import styles from './Dashboard.module.css';
import template from './Template.module.css';

export default function Dashboard () {
    TabTitle("Mancunify - Dashboard");
    return (
        <>
        <Initial />
        <div className={template.infoArea}>
        <h1 className={styles.dummyTitle}>Dashboard</h1>
        </div>
        <Sidebar pageName={"My Dashboard"}/>
        </>
    );
}