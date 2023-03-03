import { Initial, TabTitle } from '../GeneralFunctions';
import { Template } from './Template';
import styles from './Dashboard.module.css';

export default function Dashboard () {
    TabTitle("Mancunify - Dashboard");
    return (
        <>
        <Initial />
        <Template />
        </>
    );
}