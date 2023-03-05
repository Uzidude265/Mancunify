/* This creates the template for the pages such as the sidebar and the general info area on the right */
import { LogoImage } from '../GeneralFunctions';
import template from './Template.module.css';

export function SidebarModule({title, destination, pageName}) {

    if (title === pageName) {
        return (<div className={template.module} style={{backgroundColor: `rgba(121, 1, 145, 0.5)`, color: "white", cursor: "default"}}> {title} </div>);
    }
    else {
        return (<div className={template.module} onClick={destination}> {title} </div>);
    }

}

export function Sidebar({pageName}) {
    return(
        <>
        <div className={template.sidebar}>
        <div className={template.logoArea}><LogoImage style={template} /></div>
        <SidebarModule title="My Dashboard" destination={event => window.location.href='./dashboard'} pageName={pageName} />
        <SidebarModule title="Uni Charts" destination={event => window.location.href='./charts'} pageName={pageName} />
        <SidebarModule title="My Friends" destination={event => window.location.href='./friends'} pageName={pageName} />
        <SidebarModule title="My Account" destination={event => window.location.href='./account'} pageName={pageName} />
        <SidebarModule title="My Profile" destination={event => window.location.href='./profile'} pageName={pageName} />
        <div className={template.space}></div>
        <SidebarModule title="Log Out" destination={event => window.location.href='/'} pageName={pageName} />
        </div>
        </>
    );
}