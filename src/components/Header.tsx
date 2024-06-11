import React from "react";
import {useNavigate} from "react-router-dom";

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
                <a href="/" aria-current="page" className={`brand w-nav-brand w--current`}><img
                    src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662ab893723d2057ab425220_Java%20Symbol.png"
                    loading="lazy" width="Auto" height="Auto" alt="image"
                    srcSet="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662ab893723d2057ab425220_Java%20Symbol-p-500.png 500w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662ab893723d2057ab425220_Java%20Symbol-p-800.png 800w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662ab893723d2057ab425220_Java%20Symbol-p-1080.png 1080w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662ab893723d2057ab425220_Java%20Symbol-p-1600.png 1600w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662ab893723d2057ab425220_Java%20Symbol.png 1700w"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 33vw, (max-width: 991px) 23vw, (max-width: 1279px) 80px, (max-width: 1439px) 6vw, 80px"
                    className="header-logo"/></a>
                <nav role="navigation" className={`nav-menu w-nav-menu`}>
                    <a href="/" aria-current="page" className={`nav-link w-nav-link w--current`}>Home</a>
                    <a onClick={navigateToProjekte} className={`nav-link w-nav-link`}>Projekte</a>
                    <a onClick={navigateToAusbildung} className={`nav-link w-nav-link`}>Ausbildung</a>
                </nav>
                <div className={`nav-button-block`}><a href="/kontakt"
                                                       className={`button-primary w-button`}>Kontakt</a>
                </div>

            </div>
        </div>
    </div>);
}