import styles from './AccountCreation.module.css';
import { LogoImage, Initial, TabTitle } from '../GeneralFunctions.js';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AccountCreation() {

    TabTitle("Mancunify - Create Account");

    const navigate = useNavigate();
    const location = useLocation();

    //  If they somehow get to this website without submitting their email and password
    let email;
    let password;
    try {
        email = location.state.email;
        password = location.state.password;
    }
    catch(e) {
        console.log("Error");
        navigate("/signup");
    }

    const [nickname, setNickname] = useState("");
    const [about, setAbout] = useState("");
    const [department, setDepartment] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setNickname(e.target.nickname.value);
        setAbout(e.target.about.value);
        setDepartment(e.target.department.value);
        setCourse(e.target.course.value);
        setYear(e.target.year.value);
    }

    useEffect(() => {

        //  Get the error box class
        const errorBox = document.querySelector(`.${styles.errorBox}`);

        //  React runs this function on page start so this prevents that
        if (nickname !== "" || about !== "" || department !== "" || course !== "" || year !== "") {
            errorBox.textContent = "Worked!"
            errorBox.style.display = "block";
        }

    })

    return (
        <>
        <Initial/>

        <a href="/"><LogoImage style={styles}/></a>
        <div className={styles.createBox}>
            <h1 className={styles.title}>Create Account:</h1>
            <div className={styles.errorBox}/>
            <form className={styles.createArea} id="account" onSubmit={handleSubmit}>
                <div className={styles.inputField}>
                <label>Nickname</label>
                <input type="text" name="nickname" required />
                </div>
                <div className={styles.inputField}>
                <label>University Email</label>
                <input type="text" name="email" value={email} disabled />
                </div>
                <div className={styles.inputField}>
                <label>Password</label>
                <input type="password" name="password" value={password} disabled />
                </div>
                <div className={styles.inputField}>
                <label>About (optional)</label>
                <textarea name="about" rows="10"/>
                </div>
                <div className={styles.inputField}>
                <label>Department</label>
                <input type="text" name="department" required />
                </div>
                <div className={styles.inputField}>
                <label>Course</label>
                <input type="text" name="course" required />
                </div>
                <div className={styles.inputField}>
                <label>Year</label>
                <input type="text" name="year" required />
                </div>
            </form>
            <div className={styles.bottomArea}>
                <input className={styles.btn} form="account" type="Submit" defaultValue="Create Account" />
            </div>
        </div>

        </>
    );
}