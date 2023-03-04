import { Initial, TabTitle } from '../GeneralFunctions';
import { Sidebar } from './Template';
import styles from './Friends.module.css';
import template from './Template.module.css';

export default function Friends () {
    TabTitle("Mancunify - Friends");
    return (
        <>
        <Initial />
        <div className={template.infoArea}>
        <h1 className={styles.dummyTitle}>Friends</h1>
        </div>
        <Sidebar pageName={"My Friends"}/>
        </>
    );
}