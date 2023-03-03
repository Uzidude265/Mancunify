import { Initial, TabTitle } from '../GeneralFunctions';
import { Template } from './Template';
import styles from './Friends.module.css';

export default function Friends () {
    TabTitle("Mancunify - Friends");
    return (
        <>
        <Initial />
        <Template />
        </>
    );
}