import React from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "@mui/material";

export default function Header() {

    const navigate = useNavigate();
    const navigateToProjekte = () => {
        navigate('/projekte');
    }
    const navigateToAusbildung = () => {
        navigate('/ausbildung');
    }

    return (<div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease"
         data-easing2="ease" role="banner" className={`navbar w-nav`}>
        <div className={`container w-container`}>
            <div className='navbar-wrap'>
                <Link href="/" aria-current="page" className={`brand w-nav-brand w--current`}>
                    <img src={`${process.env.PUBLIC_URL}/logo_big.png`}
                     width="Auto" height="Auto" alt="image"
                      className="header-logo"/></Link>
                <nav role="navigation" className={`nav-menu w-nav-menu`}>
                    <Link href="/" aria-current="page" className={`nav-link w-nav-link w--current`}>Home</Link>
                    <Link onClick={navigateToProjekte} className={`nav-link w-nav-link`}>Projekte</Link>
                    <Link onClick={navigateToAusbildung} className={`nav-link w-nav-link`}>Ausbildung</Link>
                </nav>
                <div className={`nav-button-block`}>
                    <Link href="/kontakt"  className={`button-primary w-button`}>Kontakt</Link>
                </div>

            </div>
        </div>
    </div>);
}