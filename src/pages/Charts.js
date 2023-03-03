import { Initial, TabTitle } from '../GeneralFunctions';
import { Template } from './Template';
import styles from './Charts.module.css';

export default function Charts () {
    TabTitle("Mancunify - Uni Charts");
    return (
        <>
        <Initial />
        <Template />
        </>
    );
}