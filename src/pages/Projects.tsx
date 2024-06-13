import Page from "../components/Page";
import Lottie from "react-lottie";
import {
    chooseAServiceDef,
} from "./LottiesDefs";
import React from "react";
import ProjectTable from "./ProjectTable";


export default function Projects() {

    const projects = [
        {
            companyName: 'ComDirect (Commerzbank AG)',
            id:'commerz',
            time:'08.2024 - bis jetzt',
            businessDesc:'Entwicklung von der Echtzeitüberweissungen',
            stack:'Java',
            place:'Quintorf',
        },
        {
            companyName: 'Financial Services',
            id:'polard',
            time:'12.2022 - 06.2024',
            businessDesc:'Entwicklung des Verwaltungssystem mit Prognose von den Sales',
            stack:'Java 17/21\n' +
                'Microservices auf AWS\n'+
                'ReactJS und Typescript\n'+
                'Spring Cloud\n'+
                'Spring RestApi\n'+
                'Spring Boot\n'+
                'Spring Batch\n'+
                'Hibernate\n'+
                'Maven/Nexus/GIT (Bitbucket)\n'+
                'Datenbank: Mysql\n'+
                'Tools: JIRA, Confluence, Rancher, AWS Console, Liquibase\n'+
                'Intellij\n'+
                'Scrum\n',
            place:'Winnipeg, Kanada'
        },
        {
            companyName: 'Finanzinformatik GmbH & Co. KG',
            id:'finanzinfomatik',
            time:'04.2017-10.2022',
            businessDesc:'(1) Entwicklung der Posonalsysteme in OSPE. \n(2) Entwicklung von der GUI und Backend\n'+
            '(RestAPI und WebServices) für die Verwaltung von Telefonie für\n'+
            'die Sparkassen Mitarbeiter (Avaya). Verwaltungsfälle: Namensänderung\n'+
            'z.B. beim Heirat, Löschen von den Mitarbeiterdaten in\n'+
            'allen Avaya Komponenten (RestAPI und XML WebServices Anfragen)\n'+
            'und LDAP.',
            stack:'Java 8\n'+
            'Rest Services (client und server) mit Spring\n'+
            'Spring Batch\n'+
            'Spring Web services (client und server)\n'+
            'Spring Security LDAP\n'+
            'Spring Security (Authentifizierung gegen LDAP bzw. gegen Datenbank\n'+
            'je nach Benutzer, der sich anmeldet)\n'+
            'Bootstrap 4\n'+
            'ORM: JPA (Hibernate), Liquibase\n'+
            'Datenbank: Oracle 12\n'+
            'Server: WebSphere 8\n'+
            'Testing: JUnit , Mockito\n'+
            'Tools: Jenkins, Maven 3, Intellij, JIRA, SVN\n',
            place:'Hannover, Deutschland'
        },
        {
            companyName: 'Euromobil Autovermietung GmbH',
            id:'euromobil',
            time:'10.2016-03.2017',
            businessDesc:'Entwicklung der Backend für die Reservierung'+
            'von Autos, Verwaltung von Mietstationen, Verf&uuml;gbarkeiten.',
            stack:'Java 8\n'+
            'XML/DTD\n'+
            'XPath\n'+
            'REST Services (Resteasy),\n'+
            'SOAP XML Web Services client\n'+
            'Frontend: AngularJS,\n'+
            'EJB 3.1, JEE 6\n'+
            'ORM: JPA (Hibernate), Liquibase\n'+
            'Datenbank: PostgreSQL\n'+
            'Server: JBOSS EAP 6.4 (7.5)\n'+
            'Testing: Arquillian, JUnit 4, DBUnit\n'+
            'Tools: Jenkins, Maven 3, Intellij, Polarion/JIRA, Deployment auf\n'+
            'Linux, Git',
            place:'Hannover, Deutschland'
        },
        {
            companyName: 'CTS Eventim AG & Co. KGaA',
            id:'eventim',
            time:'04.2016-09.2016',
            businessDesc:'Weiterentwicklung von dem Fansale\n'+
            'Plattform zum privaten Verkauf von Tickets.',
            stack:'DB: MSSQL\n'+
            'Frontend: Handlebars, jQuery (mit zahlreichen Plugins, wie\n'+
            'Paging, Carousel usw), Bootstrap, Vaadin, Velocity, Media Queries,\n'+
            'SCSS Lint\n'+
            'Backend: Hibernate, Spring 4, Apache Commons\n'+
            'Testing: Jasmine JS Tests, JUnit 4, PowerMock, Mockito, DBunit\n'+
            'Server: Tomcat 7, Apache Server 2.2\n'+
            'Tools: Jenkins, Maven 3, Intellij, JIRA, SVN, XPath, XML,\n'+
            'JSONPath',
            place:'Bremen, Deutschland',
        },
        {
            companyName: 'Vodafone GmbH',
            id:'vodafone',
            time:'08.2014-03.2015',
            businessDesc:'Weiterentwicklung von einem Ticketsystem,\n'+
                'für die Erfassung von Reparatur und Installationen vor Ort\n'+
               'beim Kunden.',
            stack:'WebLogic 10.3.5, 12.1.2\n'+
                'EJB 3.1\n'+
                'JPA 2.3\n'+
                'JEE 6\n'+
                'Hibernate JPA\n'+
                'Informix DB, Oracle DB\n'+
                'Rest Services Jersey Server 2.13 (JSON)\n'+
                'Spring MVC, Boot als Spielwiese\n'+
                'SOAP XML Web Services\n'+
                'JUnit 4, Mockito, DBUnit, SoapUI, Clover\n'+
                'Build Management mit Hudson/Maven 2, Bash, SVN',
            place:'München, Deutschland'
        },
        {
            companyName: 'Lufthansa Systems/Volkswagen AG',
            id:'lufthansa',
            time:'03.2014-06.2014',
            businessDesc:  'Car Configurator – ein Auto zusammenstellen\n'+
                'inklusive Regeln dafür. Die Zusammensetzung von\n'+
                'bestimmte Paketen als Bestandteile von Autos. Die Verfügbarkeit\n'+
                'von Modellen.',
            stack:  'WebSphere 6.1/8/8.5 (Liberty)\n'+
                    'Eclipse/RAD\n'+
                    'Maven 2, Jenkins/TeamCity\n'+
                    'EJB 2.5\n'+
                    'JEE 5\n'+
                    'JPA 1.2/2\n'+
                    'Tomcat\n'+
                    'SVN, XML/XSD, XPath\n'+
                    'Build Management und Weiterentwicklung von Web Services\n'+
                    '(Maintenance).\n'+
                    'Bash Skripte pflegen und erweitern',
            place:  'Wolfsburg, Deutschland'
        },
    {
        companyName: 'Vodafone GmbH',
        id:'lufthansa',
        time:'04.2013– 02.2014',
        businessDesc:'Erfassung von internen Abl&auml;ufen, Modem\n'+
            'Provisionierung, C4, C5 Switches Verwaltung, Routers Konfiguration/\n'+
            'Regeln, Kundendaten Verwaltung, Lawful Interception\n,'+
            'Notrufrouting, Mahnsperren usw.',
        stack:'Liferay 6.1.1 & 6.1.2/Spring\n'+
            'auf Weblogic 12.1.1 & 12.1.2\n'+
            'Tools:Eclipse, Bamboo von Atlassian, Maven 2, SVN,\n'+
            'XML/XSD\n'+
            'Liferay Portlets zu Spring Controllers portieren, damit die Dependency\n'+
            'Injection genutzt werden kann.\n'+
            'ORM: EclipseLink JPA, Spring Data, QueryDSL.\n'+
            'WebServices in Portlets (Apache CXF).\n'+
            'Datenbank: Oracle',
        place:'Berlin, Deutschland'
    },
    {
        companyName: 'Immobilienscout24 (Scout24 SE)',
        id:'is24',
        time:'08.2008–04.2013',
        businessDesc:'(1)Weiterentwicklung von RESTAPI für Expose und Ergebnisliste. \n(2)Entwicklung von iOS Apps für AppStore (Objective C)',
        stack:'Tools: Xcode, Appcode, Git (Entwicklung mit iOS 5/6), Git\n'+
            'Frontend: Servlets, Spring MVC, YUI Library\n'+
            'Backend: Hibernate, Web Services (Apache CXF REST-API),\n'+
            'Apache SOLR (Suchmachine),\n'+
            'JBOSS Mailer\n'+
            'Security: XSS, SQL Injections prevention\n'+
            'Scrum, Kanban\n'+
            'Java Tools: IDEA/Eclipse, Maven2/TeamCity/Ant/Ivy, SVN,\n'+
            'release management mit RPM, SonarQube\n'+
            'Datenbank: Oracle',
        place:'Berlin, Deutschland'
    },
    ]


    return <Page title='Nataliya Wierts'>
        <section className={`section process-section`}>
            <div className={`w-layout-blockcontainer container-small w-container`}>
                <div className={`section-title-block text-center`}>
                    <h2 className={`section-title text-dark`}>Projekte</h2>
                </div>
                <div className="process-main-block">
                    {
                        projects.map(({companyName, id, time, businessDesc, stack, place, })=>
                            <div className="process-block">
                                <div className="process-number-block">
                                    <div className={`process-number`}>{companyName}</div>
                                </div>
                                <ProjectTable id={id}
                                              time={time}
                                              businessDesc={businessDesc}
                                              stack={stack}
                                              place={place}
                                />
                            </div>
                        )
                    }
               </div>
            </div>
        </section>
    </Page>;
}