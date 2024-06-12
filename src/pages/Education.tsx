import Page from "../components/Page";
import Lottie from "react-lottie";
import {aboutLottieDef} from "./LottiesDefs";
import React from "react";

export default function Education() {
    return <Page title='Nataliya Wierts'>
        <section className={`section about-v2-section`}>
            <div className={`w-layout-blockcontainer container w-container`}>
                <div className={`w-layout-grid about-v2-grid`}>
                    <div className="about-v2-left-side">
                        <img src={`${process.env.PUBLIC_URL}/img/fixeStars.svg`}
                        loading="lazy" alt="image" className="about-v2-image"/></div>
                    <div className="about-v2-right-side">
                        <div className="section-title-block">
                            <h2 className="section-title">Hochschulausbildung</h2>
                        </div>
                        <ul role="list" className="about-v2-list">
                            <li className="about-v2-list-item">
                                <img src={`${process.env.PUBLIC_URL}/img/pfeil.png`}
                                     loading="lazy" alt="image" className="about-v2-list-icon"/>
                                <div className="about-v2-list-text">
                                    Hochschule f&uuml;r Technik und Wirtschaft in Berlin,
                                    Master Wirtschaftsinformatik, 09.2006 – 08.2009
                                </div>
                            </li>
                            <li className="about-v2-list-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/pfeil.png`}
                                    loading="lazy" alt="image" className="about-v2-list-icon"/>
                                <div className="about-v2-list-text"> Hochschule f&uuml;r Technik und Wirtschaft in
                                    Berlin,
                                    Bachelor Wirtschaftsinformatik, 09.2003 - 08.2006
                                </div>
                            </li>
                            <li className="about-v2-list-item">
                                <img src={`${process.env.PUBLIC_URL}/img/pfeil.png`}
                                     loading="lazy" alt="image" className="about-v2-list-icon"/>
                                <div className="about-v2-list-text">Nationale linguistische Universit&auml;t in Kiew,
                                    Ukraine,
                                    Lehramt Englisch und Weltliteratur, 09.1997 - 06.2002
                                </div>
                            </li>
                        </ul>

                        <div className="section-title-block" style={{top: '30px'}}>
                            <h2 className="section-title">Zertifikate</h2>
                        </div>
                        <ul role="list" className="about-v2-list">
                            <li className="about-v2-list-item">
                                <img src={`${process.env.PUBLIC_URL}/img/pfeil.png`}
                                     loading="lazy" alt="image" className="about-v2-list-icon"/>
                                <div className="about-v2-list-text">
                                    Amazon Certified Cloud Practitioner (CLF-C02), 15. Mai 2024
                                </div>
                            </li>
                            <li className="about-v2-list-item">
                                <img src={`${process.env.PUBLIC_URL}/img/pfeil.png`} loading="lazy" alt="image" className="about-v2-list-icon"/>
                                <div className="about-v2-list-text">
                                    International English Language Testing System (IELTS), 1. April 2024, Level C2
                                </div>
                            </li>
                            <li className="about-v2-list-item">
                                <img src={`${process.env.PUBLIC_URL}/img/pfeil.png`} loading="lazy" alt="image" className="about-v2-list-icon"/>
                                <div className="about-v2-list-text">Oracle Certified Professional, Java SE 7 Programmer, 15. August 2014</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Lottie options={aboutLottieDef} width='160px'/>
            </div>
        </section>
    </Page>;
}