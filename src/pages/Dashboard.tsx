import './../dashboard.module.css';
import React from 'react';
import Lottie from 'react-lottie';
import {useNavigate} from "react-router-dom";

import {
    heroLottieOptions,
    serviceItemLottieDrei,
    serviceItemLottieEins,
    serviceItemLottieNeun,
    serviceItemLottieSechs,
    serviceItemLottieVier,
    serviceItemLottieZehn,
    serviceItemLottieZwei
} from "./LottiesDefs";
import Page from "../components/Page";
import {Link, Typography} from "@mui/material";

export default function Dashboard() {

    const navigate = useNavigate();
    const navigateToProjekte = () => {
        navigate('/projekte');
    }
    const navigateToAusbildung = () => {
        navigate('/ausbildung');
    }

    return <Page title='Nataliya Wierts'>
    <section className={`section hero-section`}>
        <div className={`w-layout-blockcontainer container w-container`}>
            <div className={`hero-title-main-block`}>
                <Typography component='h3' className='hero-heading'>Nataliya Wierts</Typography>
                <h2 className="section-title">Java Full Stack Developer</h2>
                <p className="hero-paragraph">Zertifizierte AWS Cloud Practitioner<br/>Frontend Entwicklung mit React,
                    Javascript/CSS oder Struts<br/>Entwicklung von Backend basierend auf Spring Boot<br/>Rest
                    Services/Microservices oder Web Services </p>
                <div className={`hero-button-block`}>
                    <Link onClick={navigateToProjekte} className={`button-primary w-button`}>Projekte</Link><Link
                    onClick={navigateToAusbildung} className={`button-primary outline w-button`}>Ausbildung</Link></div>
            </div>
            <div className="hero-image-block">
            <img
                    src={`${process.env.PUBLIC_URL}/img/Banner_big.png`}
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1439px) 98vw, 1370px"
                    srcSet="https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-500.png 500w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-800.png 800w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-1080.png 1080w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-1600.png 1600w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner-p-2000.png 2000w, https://assets-global.website-files.com/662aa988ec0fb101157d5ff4/662aa988ec0fb101157d604d_Banner.png 2001w"
                    alt="image" className="hero-image"/>
                <Lottie options={heroLottieOptions}
                        style={{ zIndex: '-1', width: '60%', height: '150%', position: 'absolute',
                    top: '-10%', bottom: 'auto', left: '0%', right: 'auto'}}/>
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
                    <p>Mit mir bekommen Sie eine erfahrene Senior Java Entwicklerin, die an sehr vielen Projekten
                        teilgenommen hat, sowohl in Deutschland als auch in USA und Kanada. Ich kenne mich sehr gut mit
                        modernen Microservice Architektur bzw. mit den &auml:lteren monolytischen Applikationen aus. </p>
                    <a onClick={navigateToProjekte} className={`button-primary margin-top-30 w-button`}>Projekte</a>
                </div>
                <div className="about-right-side">
                    <img src={`${process.env.PUBLIC_URL}/img/about.svg`}
                    loading="lazy" alt="image" className="about-right-image"/></div>
            </div>
        </div>
    </section>
    <section className={`section service-section`}>
        <div className={`w-layout-blockcontainer container-small w-container`}>
            <div className="service-title-block">
                <div className="section-title-block">
                    <h2 className="section-title">Entwicklung, die Wachstum f&ouml;rdert</h2>
                    <p>Agile Methoden der Entwicklung: Scrum, Kanban. Refactoring bzw. Weiterentwicklung von modernen
                        und legacy Applikationen.</p>
                </div>
                <h3 className="service-one-line">Erfahrungen in folgenden Technologien</h3>
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
                    </div>
                    <div className={`service-item-block two`}>
                        <h3 className="service-item-title">Spring Batch</h3>
                        <Lottie options={serviceItemLottieZwei} width='140px'/>
                    </div>
                    <div className={`service-item-block three`}>
                        <Lottie options={serviceItemLottieDrei} width='140px'/>
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
                        <Lottie options={serviceItemLottieSechs} width='140px'/>
                    </div>
                    <div className={`service-item-block seven`}>
                        <h3 className={`service-item-title seven`}>Github, Bitbucket</h3>
                    </div>
                    <div className={`service-item-block four`}>
                        <Lottie options={serviceItemLottieVier} width='140px'/>
                        <h3 className="service-item-title eight">RabbitMQ</h3>
                    </div>
                </div>
                <div className={`service-bottom-block last`}>
                    <div className={`service-item-block nine`}>
                        <h3 className={`service-item-title nine`}>Docker</h3>
                        <Lottie options={serviceItemLottieNeun} width='140px'/>
                    </div>
                    <div className={`service-item-block ten`}>
                        <h3 className={`service-item-title`}>Spring AWS</h3>
                        <Lottie options={serviceItemLottieZehn} width='140px'/>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </Page>;
}