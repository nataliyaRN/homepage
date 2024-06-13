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
                    <h2 className={`section-title text-dark`}>Projekte</h2>
                </div>
                <div className="process-main-block">
                    <div className="process-block">
                        <div className={`process-number-block process-number`}>
                            <Lottie options={processLottieDef} width='60px' style={{color:'black'}}/>
                            <div className="process-number">ComDirect (Commerzbank AG)</div>
                        </div>
                        <ProjectTable id='commerz'
                                      time='08.2024 - bis jetzt'
                                      businessDesc='Entwicklung von der Echtzeit&uuml;berweissungen'
                                      stack='Java'
                                      place='Quintorf'
                        />
                        <Lottie options={chooseAServiceDef} width='180px' style={{marginTop: '15px'}}/>
                        <h3 className={`process-number`}>Financial Services</h3>
                        <ProjectTable id='pollard'
                                      time='12.2022 - 06.2024'
                                      businessDesc='Entwicklung des Verwaltungssystem mit Prognose von den Sales'
                                      stack='Java 17/21&
                                            Microservices auf AWS&
                                            ReactJS und Typescript&
                                            Spring Cloud&
                                            Spring RestApi&
                                            Spring Boot&
                                            Spring Batch&
                                            Hibernate&
                                            Maven/Nexus/GIT (Bitbucket)&
                                            Datenbank: Mysql&
                                            Tools: JIRA, Confluence, Rancher, AWS Console, Liquibase&
                                            Intellij&
                                            Scrum'
                                      place='Winnipeg, Kanada'
                        />
                    </div>

                    <div className="process-block">
                        <div className="process-number-block">
                            <Lottie options={requestAMeetingLottieDef} width='60px'/>
                            <div className="process-number">Finanzinformatik GmbH & Co. KG</div>
                        </div>
                        <ProjectTable id='finanzinfomatik'
                                      time='04.2017-10.2022'
                                      businessDesc='(1)Entwicklung der Posonalsysteme in OSPE. (2)Entwicklung von der GUI und Backend
                                        (RestAPI und WebServices) f&auml;r die Verwaltung von Telefonie f&uuml;r
                                        die Sparkassen Mitarbeiter (Avaya). Verwaltungsf&auml;lle: Namens&auml;nderung
                                        z.B. beim Heirat, L&ouml;schen von den Mitarbeiterdaten in
                                        allen Avaya Komponenten (RestAPI und XML WebServices Anfragen)
                                        und LDAP.'
                                      stack='Java 8&
                                            Rest Services (client und server) mit Spring&
                                            Spring Batch&
                                            Spring Web services (client und server)&
                                            Spring Security LDAP&
                                            Spring Security (Authentifizierung gegen LDAP bzw. gegen Datenbank&
                                            je nach Benutzer, der sich anmeldet)&
                                            Bootstrap 4&
                                            ORM: JPA (Hibernate), Liquibase&
                                            Datenbank: Oracle 12&
                                            Server: WebSphere 8&
                                            Testing: JUnit , Mockito&
                                            Tools: Jenkins, Maven 3, Intellij, JIRA, SVN&'
                                      place='Hannover, Deutschland'
                        />
                        <Lottie options={requestAMeetingEndeDef} width='160px' style={{marginTop: '20px'}}/>
                    </div>
                    <div className="process-block">
                        <div className="process-number-block">
                            <div className="process-number">Euromobil Autovermietung GmbH</div>
                        </div>
                        <ProjectTable id='euromobil'
                                      time='10.2016-03.2017'
                                      businessDesc='Entwicklung der Backend für die Reservierung
                                        von Autos, Verwaltung von Mietstationen, Verf&uuml;gbarkeiten.'
                                      stack='Java 8&
                                                XML/DTD&
                                                XPath&
                                                REST Services (Resteasy),&
                                                SOAP XML Web Services client&
                                                Frontend: AngularJS,&
                                                EJB 3.1, JEE 6&
                                                ORM: JPA (Hibernate), Liquibase&
                                                Datenbank: PostgreSQL&
                                                Server: JBOSS EAP 6.4 (7.5)&
                                                Testing: Arquillian, JUnit 4, DBUnit&
                                                Tools: Jenkins, Maven 3, Intellij, Polarion/JIRA, Deployment auf&
                                                Linux, Git&'
                                      place='Hannover, Deutschland'
                        />
                        <Lottie options={processThreeDef} width='160px' style={{marginTop: '15px'}}/>
                    </div>
                    <div className={`process-block`}>
                        <div className="process-number-block">
                            <div className="process-number">CTS Eventim AG & Co. KGaA</div>
                        </div>
                        <ProjectTable id='eventim'
                                      time='04.2016-09.2016'
                                      businessDesc='Weiterentwicklung von dem Fansale
                                            Plattform zum privaten Verkauf von Tickets.'
                                      stack='DB: MSSQL&
                                            Frontend: Handlebars, jQuery (mit zahlreichen Plugins, wie&
                                            Paging, Carousel usw), Bootstrap, Vaadin, Velocity, Media Queries,&
                                            SCSS Lint&
                                            Backend: Hibernate, Spring 4, Apache Commons&
                                            Testing: Jasmine JS Tests, JUnit 4, PowerMock, Mockito, DBunit&
                                            Server: Tomcat 7, Apache Server 2.2&
                                            Tools: Jenkins, Maven 3, Intellij, JIRA, SVN, XPath, XML,&
                                            JSONPath&'
                                      place='Bremen, Deutschland'
                        />
                    </div>
                    <div className={`process-block`}>
                        <div className="process-number-block">
                            <Lottie options={receiveCustomPlanDef} width='60px'/>
                            <div className="process-number">Vodafone GmbH</div>
                        </div>
                        <ProjectTable id='vodafone'
                                      time='08.2014-03.2015'
                                      businessDesc='Weiterentwicklung von einem Ticketsystem
                                                f&uuml;r die Erfassung von Reparatur und Installationen vor Ort
                                                beim Kunden.'
                                      stack='WebLogic 10.3.5, 12.1.2&
                                            EJB 3.1&
                                            JPA 2.3&
                                            JEE 6&
                                            Hibernate JPA&
                                            Informix DB, Oracle DB&
                                            Rest Services Jersey Server 2.13 (JSON)&
                                            Spring MVC, Boot als Spielwiese&
                                            SOAP XML Web Services&
                                            JUnit 4, Mockito, DBUnit, SoapUI, Clover&
                                            Build Management mit Hudson/Maven 2, Bash, SVN&'
                                      place='M&uuml;nchen, Deutschland'
                        />
                        <Lottie options={chooseAServiceDef} width='180px' style={{marginTop: '15px'}}/>
                    </div>
                    <div className={`process-block`}>
                        <div className="process-number-block">
                            <div className="process-number">Lufthansa Systems/Volkswagen AG</div>
                        </div>
                        <ProjectTable id='lufthansa'
                                      time='03.2014-06.2014'
                                      businessDesc='Car Configurator – ein Auto zusammenstellen,
                                                    inklusive Regeln daf&uuml;r. Die Zusammensetzung von
                                                    bestimmte Paketen als Bestandteile von Autos. Die Verf&uuml;gbarkeit
                                                    von Modellen.'
                                      stack='WebSphere 6.1/8/8.5 (Liberty)&
                                            Eclipse/RAD&
                                            Maven 2, Jenkins/TeamCity&
                                            EJB 2.5&
                                            JEE 5&
                                            JPA 1.2/2&
                                            Tomcat&
                                            SVN, XML/XSD, XPath&
                                            Build Management und Weiterentwicklung von Web Services&
                                            (Maintenance).&
                                            Bash Skripte pflegen und erweitern'
                                      place='Wolfsburg, Deutschland'
                        />
                        <Lottie options={processThreeDef} width='160px' style={{marginTop: '15px'}}/>
                    </div>
                    <div className={`process-block`}>
                        <div className="process-number-block">
                            <div className="process-number">Vodafone Deutschland GmbH</div>
                        </div>
                        <ProjectTable id='lufthansa'
                                      time='04.2013– 02.2014'
                                      businessDesc='Erfassung von internen Abl&auml;ufen, Modem
                                        Provisionierung, C4, C5 Switches Verwaltung, Routers Konfiguration/
                                        Regeln, Kundendaten Verwaltung, Lawful Interception,
                                        Notrufrouting, Mahnsperren usw.'
                                      stack='Liferay 6.1.1 & 6.1.2/Spring&
                                       auf Weblogic 12.1.1 & 12.1.2&
                                       Tools:Eclipse, Bamboo von Atlassian, Maven 2, SVN,&
                                        XML/XSD&
                                        Liferay Portlets zu Spring Controllers portieren, damit die Dependency&
                                        Injection genutzt werden kann.&
                                        ORM: EclipseLink JPA, Spring Data, QueryDSL.&
                                        WebServices in Portlets (Apache CXF).&
                                        Datenbank: Oracle&'
                                      place='Berlin, Deutschland'
                        />
                    </div>
                    <div className={`process-block last`}>
                        <div className="process-number-block">
                            <Lottie options={requestAMeetingEndeDef} width='160px'/>
                            <div className="process-number">Immobilienscout24 (Scout24 SE)</div>
                        </div>
                        <ProjectTable id='is24'
                                      time='08.2008 –04.2013'
                                      businessDesc='Weiterentwicklung von RESTAPI f&uuml;r Expose und Ergebnisliste. Entwicklung von iOS Apps f&uuml;r AppStore (Objective C)'
                                      stack='Tools: Xcode, Appcode, Git (Entwicklung mit iOS 5/6), Git&
                                      Frontend: Servlets, Spring MVC, YUI Library&
                                      Backend: Hibernate, Web Services (Apache CXF REST-API),&
                                      Apache SOLR (Suchmachine),&
                                      JBOSS Mailer&
                                      Security: XSS, SQL Injections prevention&
                                      Scrum, Kanban&
                                      Java Tools: IDEA/Eclipse, Maven2/TeamCity/Ant/Ivy, SVN,&
                                      release management mit RPM, SonarQube&
                                      Datenbank: Oracle&'
                                      place='Berlin, Deutschland'
                        />
                        <Lottie options={chooseAServiceDef} width='180px' style={{marginTop: '15px'}}/>
                    </div>
                </div>
            </div>
        </section>
    </Page>;
}