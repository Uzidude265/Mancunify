import Logo from './images/logo.png';

export function LogoImage({style}) {
    return (
        <img className={style.logo} src={Logo} alt="Mancunify Logo"/>
    );
}

export function Initial() {
    return (
        <>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"/>
        </>
    );
}

export function TabTitle(newTitle) {
    return (
        document.title = newTitle
    );
}