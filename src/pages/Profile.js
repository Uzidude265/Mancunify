import { Initial, TabTitle } from '../GeneralFunctions';
import { Template } from './Template';
import styles from './Profile.module.css';

export default function Profile () {
    TabTitle("Mancunify - Profile");
    return (
        <>
        <Initial />
        <Template />
        </>
    );
}