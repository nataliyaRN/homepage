import './../dashboard.module.css';
import React from 'react';
import Lottie from 'react-lottie';
import serviceItemLottie1 from './../lotties/serviceItemLottie1.json';
import heroLottie from './../lotties/hero.json';

export default function Dashboard() {
    const serviceItemLottieEins = {
        loop: true,
        autoplay: true,
        duration: true,
        direction: 1,
        animationDuration:2.67,
        animationData: serviceItemLottie1,
        renderer: 'svg',

    };
    const heroLottieOptions = {
        loop: true,
        autoplay: true,
        duration: true,
        direction: false,
        animationDuration:2.67,
        animationData: heroLottie,
    };
    return <><div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease"
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
                            <a href="https://ittechinfo.webflow.io/services/information-security" className={`dropdown-link w-dropdown-link`}>service Detail</a>
                            <a href="/project"  className={`dropdown-link w-dropdown-link`}>project</a>
                            <a  href="https://ittechinfo.webflow.io/project/mobile-app-for-sharing" className={`dropdown-link w-dropdown-link`}>project detail</a>
                            <a href="/our-team"  className={`dropdown-link w-dropdown-link`}>team</a>
                            <a href="https://ittechinfo.webflow.io/team/sean-khelif" className={`dropdown-link w-dropdown-link`}>team detail</a>
                            <a  href="https://ittechinfo.webflow.io/post/build-your-money-machine-take-control" className={`dropdown-link w-dropdown-link`}>blog detail</a>
                            <a href="https://ittechinfo.webflow.io/404" className={`dropdown-link w-dropdown-link`}>404</a>
                        </nav>
                    </div>
                </nav>
                <div className={`nav-button-block`}><a href="/contact-us" className={`button-primary w-button`}>Kontakt</a>
                </div>
                <div className={`menu-button w-nav-button`}>
                    <div className={`w-icon-nav-menu`}></div>
                </div>
            </div>
        </div>
    </div>
    <section className={`section hero-section`}>
        <div className={`w-layout-blockcontainer container w-container`}>
            <div className={`hero-title-main-block`}>
                <h1 className="hero-heading">Java Full Stack Developer</h1>
                <p className="hero-paragraph">Zertifizierte AWS Cloud Practitioner<br/>Frontend Entwicklung mit React,
                    Javascript/Css oder Struts<br/>Entwicklung von Backend basierend auf Spring Boot<br/>Rest
                    Services/Microservices oder Web Services </p>
                <div className={`hero-button-block`}><a href="/about-us" className={`button-primary w-button`}>Projekte</a><a
                    href="/contact-us" className={`button-primary outline w-button`}>Ausbildung</a></div>
            </div>
            <div className="hero-image-block">

                <img
                    src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1439px) 98vw, 1370px"
                    srcSet="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-500.png 500w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-800.png 800w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-1080.png 1080w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-1600.png 1600w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-2000.png 2000w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner.png 2001w"
                    alt="image" className="hero-image"/>
                <Lottie options={heroLottieOptions}  style={{ zIndex: '-1', width: '60%', height: '150%', position: 'absolute',
                    top: '-10%', bottom: 'auto', left: '0%', right: 'auto'}}/>
                <div data-is-ix2-target="1"
                     className="hero-lottie-animation" data-animation-type="lottie"
                     data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604e_banner.json"
                     data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                     data-default-duration="2.6666666666666665" data-duration="0"></div>
            </div>
        </div>
    </section>
    <section className={`section about-section`}>
        <div className={`w-layout-blockcontainer container w-container`}>
            <div className={`w-layout-grid about-grid`}>
                <div className="about-left-side">
                    <div className="section-title-block">
                        <h2 className="section-title">Ihre Suche hat ein Ende.</h2>
                    </div>
                    <p>Mit mir bekommen Sie eine erfahrene Senior Java Entwicklerin, die an sehr vielen Projkten
                        teilgenommen hat, sowohl in Deutschland als auch in USA und Kanada. Ich kenne mich sehr gut mir
                        modernen microservice Architektur bzw. mit den älteren monolytischen Applikationen aus. </p>
                    <a href="/about-us" className={`button-primary margin-top-30 w-button`}>Projekte</a>
                </div>
                <div className="about-right-side"><img
                    src={`${process.env.PUBLIC_URL}/img/about.svg`}
                    loading="lazy" alt="image" className="about-right-image"/></div>
            </div>
        </div>
    </section>
    <section className={`section service-section`}>
        <div className={`w-layout-blockcontainer container-small w-container`}>
            <div className="service-title-block">
                <div className="section-title-block">
                    <h2 className="section-title">Entwicklung, die Wachstum f&ouml:rdert</h2>
                    <p>Agile Methoden der Entwicklung: Scrum, Kanban. Refactoring bzw. Weiterentwicklung von modernen
                        und legacy Applikationen.</p>
                </div>
                <h3 className="service-one-line">Erfahrung in folgenden Technologien</h3>
            </div>
            <div data-is-ix2-target="1" className="service-arrow-lottie"
                 data-animation-type="lottie"
                 data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6050_Animation%20-%201699268090021.json"
                 data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                 data-default-duration="2.6666666666666665" data-duration="0"></div>
            <div className="service-bottom-main-block">
                <div className="service-bottom-block">
                    <div className="service-item-block">
                        <h3 className={`service-item-title one`}>Mysql, Oracle</h3>
                        <Lottie options={serviceItemLottieEins} width='140px'/>
                        <div data-is-ix2-target="1"
                             className="service-item-lottie" data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6055_Animation%20-%201699426090585.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                    </div>
                    <div className={`service-item-block two`}>
                        <h3 className="service-item-title">Spring Batch</h3>
                        <div data-is-ix2-target="1"
                             className={`service-item-lottie two`} data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6057_Animation%20-%201699426006166.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                    </div>
                    <div className={`service-item-block three`}>
                        <div data-w-id="3e224405-6905-5e4e-88d5-c722a0c8e870" data-is-ix2-target="1"
                             className={`service-item-lottie three`} data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6059_Animation%20-%201699425848965.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                        <h3 className={`service-item-title three`}>Microservices</h3>
                    </div>
                    <div className={`service-item-block four`}>
                        <h3 className={`service-item-title four`}>Spring Boot</h3>
                    </div>
                </div>
                <div className={`service-bottom-block center`}>
                    <div className="service-item-block">
                        <h3 className={`service-item-title five`}>React/Typescript</h3>
                    </div>
                    <div className={`service-item-block six`}>
                        <div data-w-id="e9c7c735-349e-09c1-d8b2-b45429a7807e" data-is-ix2-target="1"
                             className={`service-item-lottie six`} data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6056_Animation%20-%201699426044837.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                    </div>
                    <div className={`service-item-block seven`}>
                        <h3 className={`service-item-title seven`}>Github, Bitbucket</h3>
                    </div>
                    <div className={`service-item-block four`}>
                        <div data-w-id="984235a7-77d1-c154-f5a4-fe46ae032310" data-is-ix2-target="1"
                             className={`service-item-lottie eight`} data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6058_Animation%20-%201699425971194.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                        <h3 className="service-item-title eight">RabbitMQ</h3>
                    </div>
                </div>
                <div className={`service-bottom-block last`}>
                    <div className={`service-item-block nine`}>
                        <h3 className={`service-item-title nine`}>Docker</h3>
                        <div data-w-id="b8f58c1e-2f88-cc16-208e-08bc447e2872" data-is-ix2-target="1"
                             className={`service-item-lottie nine`} data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6052_Animation%20-%201699426451090.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                    </div>
                    <div className={`service-item-block ten`}>
                        <h3 className={`service-item-title`}>Spring AWS</h3>
                        <div data-w-id="1d0fda4e-bdd3-4ca4-65f6-b0eb862e1692" data-is-ix2-target="1"
                             className={`service-item-lottie ten`} data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6053_Animation%20-%201699426374970.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className={`section process-section`}>
        <div className={`w-layout-blockcontainer container-small w-container`}>
            <div className={`section-title-block text-center`}>
                <h2 className={`section-title text-white`}>Services That Help You Grow</h2>
            </div>
            <div className="process-main-block">
                <div className="process-block">
                    <div className="process-number-block">
                        <div data-w-id="61b4be50-39a8-ef81-5d93-5ad17786fc36" data-is-ix2-target="1"
                             className="process-lottie" data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d605c_Animation%20-%201699504802273.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                        <div className="process-number">01</div>
                    </div>
                    <h3 className="process-title">Choose a Service</h3>
                    <p className="process-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                        interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div data-w-id="0f920c48-a90f-7c31-e27f-3b99d24501ef" data-is-ix2-target="1"
                         className="process-one-lottie" data-animation-type="lottie"
                         data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d605b_Animation%20-%201699505240497.json"
                         data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                         data-default-duration="2.6666666666666665" data-duration="0"></div>
                </div>
                <div className="process-block">
                    <div className="process-number-block">
                        <div data-w-id="c4ee3cf8-96b9-7407-13dd-0a104378b96d" data-is-ix2-target="1"
                             className="process-lottie" data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d605c_Animation%20-%201699504802273.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                        <div className="process-number">02</div>
                    </div>
                    <h3 className="process-title">Request a Meeting</h3>
                    <p className="process-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                        interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div data-w-id="27890f42-a0a7-4425-e8f3-9a168833adbf" data-is-ix2-target="1"
                         className="process-two-lottie" data-animation-type="lottie"
                         data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d605d_Animation%20-%201699504765259.json"
                         data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                         data-default-duration="2.6666666666666665" data-duration="0"></div>
                </div>
                <div className="process-block">
                    <div className="process-number-block">
                        <div data-w-id="96da6b22-72d9-e814-6471-fa10365b9ac7" data-is-ix2-target="1"
                             className="process-lottie" data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d605c_Animation%20-%201699504802273.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                        <div className="process-number">03</div>
                    </div>
                    <h3 className="process-title">Receive Custom Plan</h3>
                    <p className="process-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                        interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div data-w-id="110c3b0f-46e8-7bae-25fa-49a1fced506d" data-is-ix2-target="1"
                         className="process-three-lottie" data-animation-type="lottie"
                         data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d608b_Animation%20-%201700201369117.json"
                         data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                         data-default-duration="2.6666666666666665" data-duration="0"></div>
                </div>
                <div className={`process-block last`}>
                    <div className="process-number-block">
                        <div data-w-id="18d58331-c759-1ecb-5140-067297a29449" data-is-ix2-target="1"
                             className="process-lottie" data-animation-type="lottie"
                             data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d605c_Animation%20-%201699504802273.json"
                             data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                             data-default-duration="2.6666666666666665" data-duration="0"></div>
                        <div className="process-number">04</div>
                    </div>
                    <h3 className="process-title">Let’s Make it Happen.</h3>
                    <p className="process-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                        interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>
            </div>
        </div>
    </section>
    <section className={`section about-v2-section`}>
        <div className={`w-layout-blockcontainer container w-container`}>
            <div className={`w-layout-grid about-v2-grid`}>
                <div id="w-node-_52b7b2a1-9bd7-adc7-2ae8-690a920b4d6a-157d6044" className="about-v2-left-side"><img
                    src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6060_1.svg"
                    loading="lazy" alt="image" className="about-v2-image"/></div>
                <div id="w-node-_344e9735-4696-d2a0-c8a7-effa5f99f4c2-157d6044" className="about-v2-right-side">
                    <div className="section-title-block">
                        <h2 className="section-title">We Can Take Your Business</h2>
                    </div>
                    <ul role="list" className="about-v2-list">
                        <li className="about-v2-list-item">
                            <img
                                src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6061_fi_2985162.png"
                                loading="lazy" alt="image" className="about-v2-list-icon"/>
                            <div className="about-v2-list-text">Access the strategies and talent powering the biggest
                                creators and achieve YouTube goals, faster.
                            </div>
                        </li>
                        <li className="about-v2-list-item">
                            <img
                                src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6061_fi_2985162.png"
                                loading="lazy" alt="image" className="about-v2-list-icon"/>
                            <div className="about-v2-list-text">Access the strategies and talent powering the biggest
                                creators and achieve YouTube goals, faster.
                            </div>
                        </li>
                        <li className="about-v2-list-item">
                            <img
                                src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6061_fi_2985162.png"
                                loading="lazy" alt="image" className="about-v2-list-icon"/>
                            <div className="about-v2-list-text">Access the strategies and talent powering the biggest
                                creators and achieve YouTube goals, faster.
                            </div>
                        </li>
                    </ul>
                    <a href="/contact-us" className={`button-primary margin-top-30 w-button`}>contact us</a>
                </div>
            </div>
            <div data-w-id="e7525777-ee1b-88ed-cce4-375b43537535" data-is-ix2-target="1" className="about-v2-lottie"
                 data-animation-type="lottie"
                 data-src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d6062_Animation%20-%201699522569962.json"
                 data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg"
                 data-default-duration="2.6666666666666665" data-duration="0"></div>
        </div>
    </section>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=662aa988ec0fb101157d5ff4"
            type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossOrigin="anonymous"></script>
    <script src="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/js/webflow.d7ba3d860.js"
            type="text/javascript"></script>
    </>;
}