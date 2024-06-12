import Page from "../components/Page";
import Lottie from "react-lottie";
import {
    chooseAServiceDef,
    processLottieDef, processThreeDef,
    receiveCustomPlanDef,
    requestAMeetingEndeDef,
    requestAMeetingLottieDef
} from "./LottiesDefs";
import React from "react";
import ProjectTable from "./ProjectTable";


export default function Projects() {
    return <Page title='Nataliya Wierts'>
        <section className={`section process-section`}>
            <div className={`w-layout-blockcontainer container-small w-container`}>
                <div className={`section-title-block text-center`}>
                    <h2 className={`section-title text-white`}>Projekte</h2>
                </div>
                <div className="process-main-block">
                    <div className="process-block">
                        <div className="process-number-block">
                            <Lottie options={processLottieDef} width='60px'/>
                            <div className="process-number">ComDirect (Commerzbank AG)</div>
                        </div>
                        <ProjectTable id='commerz'
                                      time='08.2024 - bis jetzt'
                                      businessDesc='Entwicklung von der Echtzeit&uuml;berweissungen'
                                      stack='Java'
                                      place='Quintorf'
                        />
                        <h3 className="process-title">Financial Services</h3>
                        <ProjectTable id='pollard'
                                      time='12.2022 - 06.2024'
                                      businessDesc='Entwicklung des Verwaltungssystem mit Prognose von den Sales'
                                      stack='Java 17/21
                                            Microservices auf AWS
                                            ReactJS und Typescript
                                            Spring Cloud
                                            Spring RestApi
                                            Spring Boot
                                            Spring Batch
                                            Hibernate
                                            Maven/Nexus/GIT (Bitbucket)'
                                      place='Winnipeg, Kanada'
                        />
                        <Lottie options={chooseAServiceDef} width='180px'/>
                    </div>
                    <div className="process-block">
                        <div className="process-number-block">
                            <Lottie options={requestAMeetingLottieDef} width='60px'/>
                            <div className="process-number">02</div>
                        </div>
                        <h3 className="process-title">Vereinbaren Sie ein Vorstellungsgespr&auml;ch </h3>
                        <p className="process-paragraph">Lassen Sie uns Ihre Ziele besprechen und wie wir sie zusammen
                            erreichen k&ouml;nnen.</p>
                        <Lottie options={requestAMeetingEndeDef} width='160px'/>
                    </div>
                    <div className="process-block">
                        <div className="process-number-block">
                            <Lottie options={receiveCustomPlanDef} width='60px'/>
                            <div className="process-number">03</div>
                        </div>
                        <h3 className="process-title">Lassen Sie sich von M&ouml;glichkeiten begeistern</h3>
                        <p className="process-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                            interdum nulla, ut commodo diam libero vitae erat.</p>
                        <Lottie options={processThreeDef} width='160px'/>
                    </div>
                    <div className={`process-block last`}>
                        <div className="process-number-block">
                            <Lottie options={receiveCustomPlanDef} width='60px'/>
                            <div className="process-number">04</div>
                        </div>
                        <h3 className="process-title">Ran an die Arbeit!</h3>
                        <p className="process-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                            interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>
                </div>
            </div>
        </section>
    </Page>;
}