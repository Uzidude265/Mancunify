import { Initial, TabTitle } from '../GeneralFunctions';
import { Sidebar } from './Template';
import styles from './Charts.module.css';
import template from './Template.module.css';

export default function Charts () {
    TabTitle("Mancunify - Uni Charts");
    return (
        <>
        <Initial />
        <div className={template.infoArea}>
        <h1 className={styles.dummyTitle}>Charts</h1>
        </div>
        <Sidebar pageName={"Uni Charts"}/>
        </>
    );
}