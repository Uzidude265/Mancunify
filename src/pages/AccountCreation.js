import styles from './AccountCreation.module.css';
import { LogoImage, Initial, TabTitle } from '../GeneralFunctions.js';
import { useEffect, useState } from 'react';

export default function AccountCreation() {

    TabTitle("Mancunify - Create Account");

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

    // useEffect(() => {

    //     //  Get the error box class
    //     const errorBox = document.querySelector(`.${styles.errorBox}`);

    //     //  Regex for student email
    //     const regex = /[\w-]+@student.manchester.ac.uk/;

    //     //  React runs this function on page start so this prevents that
    //     if (email !== "" && password !== "" && rePassword !== "") {

    //         //  If passwords do not match, show error
    //         if (password !== rePassword) {
    //             errorBox.textContent = "Passwords do not match";
    //             errorBox.style.display = "block";
    //         }
    //         //  If email is not a student email, show error
    //         else if (!regex.test(email)) {
    //             errorBox.textContent = "Email is not a student email";
    //             errorBox.style.display = "block";
    //         }

    //         //  Need to attempt to send email here somehow
    //         //  If email didn't go through, show error
    //         else if (email === "failed@student.manchester.ac.uk") {
    //             errorBox.textContent = "Email is invalid";
    //             errorBox.style.display = "block";
    //         }
    //         //  If email is valid and passwords match, redirect to OTP page (needs to be made)
    //         else {
    //             errorBox.style.display = "none";
    //             window.location.href = "/otp";
    //         }

    //     }

    // })

    return (
        <>
        <Initial/>

        <a href="/"><LogoImage style={styles}/></a>
        <div className={styles.createBox}>
            <h1 className={styles.title}>Create Account:</h1>
            <form className={styles.createArea} onSubmit={handleSubmit}>
                <div className={styles.errorBox}></div>
                <div className={styles.inputField}>
                <label>Nickname</label>
                <input type="text" name="nickname" required />
                </div>
                <div className={styles.inputField}>
                <label>University Email</label>
                <input type="text" name="email" disabled />
                </div>
                <div className={styles.inputField}>
                <label>Password</label>
                <input type="password" name="password" disabled />
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
                <input className={styles.btn} type="Submit" defaultValue="Create Account" />
                {/* <div className={styles.login}>
                Already have an account? <a className={styles.loginLink} href="/login">Log in</a>
                </div> */}
            </div>
        </div>

        </>
    );
}