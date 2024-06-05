import React from "react";

export default function Header() {
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
                    <a href="/" aria-current="page" className={`nav-link w-nav-link w--current`}>Home</a><a
                    href="/about-us" className={`nav-link w-nav-link`}>Projekte</a>
                    <div data-hover="true" data-delay="0" className={`dropdown w-dropdown`}>
                        <div className={`nav-link w-dropdown-toggle`}>
                            <div>Ausbildung</div>
                        </div>
                        <nav className={`dropdown-list w-dropdown-list`}>
                            <a href="/home-2" className={`dropdown-link w-dropdown-link`}>home 2</a>
                            <a href="/our-service" className={`dropdown-link w-dropdown-link`}>service</a>
                            <a href="https://ittechinfo.webflow.io/services/information-security"
                               className={`dropdown-link w-dropdown-link`}>service Detail</a>
                            <a href="/project" className={`dropdown-link w-dropdown-link`}>project</a>
                            <a href="https://ittechinfo.webflow.io/project/mobile-app-for-sharing"
                               className={`dropdown-link w-dropdown-link`}>project detail</a>
                            <a href="/our-team" className={`dropdown-link w-dropdown-link`}>team</a>
                            <a href="https://ittechinfo.webflow.io/team/sean-khelif"
                               className={`dropdown-link w-dropdown-link`}>team detail</a>
                            <a href="https://ittechinfo.webflow.io/post/build-your-money-machine-take-control"
                               className={`dropdown-link w-dropdown-link`}>blog detail</a>
                            <a href="https://ittechinfo.webflow.io/404"
                               className={`dropdown-link w-dropdown-link`}>404</a>
                        </nav>
                    </div>
                </nav>
                <div className={`nav-button-block`}><a href="/contact-us"
                                                       className={`button-primary w-button`}>Kontakt</a>
                </div>
                <div className={`menu-button w-nav-button`}>
                    <div className={`w-icon-nav-menu`}></div>
                </div>
            </div>
        </div>
    </div>);
}