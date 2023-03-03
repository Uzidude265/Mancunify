import { Initial, TabTitle } from '../GeneralFunctions';
import { Template } from './Template';
import styles from './Account.module.css';

export default function Account () {
    TabTitle("Mancunify - Account");
    return (
        <>
        <Initial />
        <Template />
        </>
    );
}