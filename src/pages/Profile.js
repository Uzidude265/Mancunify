import { Initial, TabTitle } from '../GeneralFunctions';
import { Sidebar } from './Template';
import styles from './Profile.module.css';
import template from './Template.module.css';

export default function Profile () {
    TabTitle("Mancunify - Profile");
    return (
        <>
        <Initial />
        <div className={template.infoArea}>
        <h1 className={styles.dummyTitle}>Profile</h1>
        </div>
        <Sidebar pageName={"My Profile"}/>
        </>
    );
}