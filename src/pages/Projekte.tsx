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

export default function Projekte() {
    return <Page title='Nataliya Wierts'>
        <section className={`section process-section`}>
            <div className={`w-layout-blockcontainer container-small w-container`}>
                <div className={`section-title-block text-center`}>
                    <h2 className={`section-title text-white`}>Lassen Sie Ihr Gesch&auml;ft wachsen</h2>
                </div>
                <div className="process-main-block">
                    <div className="process-block">
                        <div className="process-number-block">
                            <Lottie options={processLottieDef} width='60px'/>
                            <div className="process-number">01</div>
                        </div>
                        <h3 className="process-title">Holen Sie sich Hilfe beim Anforderungsanalyse</h3>
                        <p className="process-paragraph">Wenn Sie eine gute Idee haben,
                            die bestimmte Probleme mithilfe von der IT l&ouml:sen kann, holen Sie sich mich
                            um Ihnen bei der Anforedungsanalyse und Definition zu helfen.</p>
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