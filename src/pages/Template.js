/* This creates the template for the pages such as the sidebar and the general info area on the right */
import { LogoImage } from '../GeneralFunctions';
import template from './Template.module.css';

export function SidebarModule({title, destination}) {
    return (<div className={template.module} onClick={destination}> {title} </div>);
}

export function Sidebar() {
    return(
        <div className={template.sidebar}>
        <div className={template.logoArea}><LogoImage style={template} /></div>
        <SidebarModule title="My Dashboard" destination={event => window.location.href='./dashboard'} />
        <SidebarModule title="Uni Charts" destination={event => window.location.href='./charts'} />
        <SidebarModule title="My Friends" destination={event => window.location.href='./friends'} />
        <SidebarModule title="My Account" destination={event => window.location.href='./account'} />
        <SidebarModule title="My Profile" destination={event => window.location.href='./profile'} />
        <div className={template.space}></div>
        <SidebarModule title="Log Out" destination={event => window.location.href='/'} />
        </div>
    );
}

export function Template() {
    return(
        <>
        <div className={template.infoArea}></div>
        <Sidebar />
        </>
    );
}