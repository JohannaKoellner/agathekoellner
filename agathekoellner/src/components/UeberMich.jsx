import React from "react";
import Portrait2 from "../assets/Portrait2.jpeg";

const UeberMich = () => {
    return (
        <div className="content">
            <h2 className='sections' id='ueber-mich'>Über mich</h2>
            <img className="circle portrait" src={Portrait2} alt="Porträtfoto von Agathe Köllner" />
            <p className="text">
                Ich durfte als Lehrerin und Schulleiterin einer großen Volksschule tätig sein
                und dabei viele Lebenserfahrungen sammeln. Nach Beendigung meiner Berufstätigkeit 
                ist es mir ein Herzensbedürfnis, meine Klient:innen durch mein Wissen, meine Erfahrung 
                und meine spirituellen Fähigkeiten, die ich mir im Kontakt mit vielen Menschen 
                und durch unterschiedliche Fortbildungen aneignen durfte, wieder erstrahlen zu lassen.
            </p>
            <p className="text">
                In meiner Zeit als Direktorin absolvierte ich die Ausbildung zur Mediatorin,
                weil es mir wichtig ist, kompetent Lösungen zu erarbeiten, mit denen beide Parteien 
                als Gewinner aus dem Konflikt gehen können. Im Anschluss daran erwarb ich zudem die
                Zertifizierung als systemischer Coach nach dem Konzept der „Neuen Autorität“. 
                Dieses beinhaltet unter Anderem Säulen wie Selbstkontrolle, Unterstützungsnetzwerke, 
                Präsenz und Wiedergutmachung und verhalf mir dazu, das Team der Schule  zu stärken 
                und zu professionalisieren, um auch in schwierigen Situationen wertschätzend und zielführend handeln zu können.
            </p>
            <p className="text">
                Bodenständige Spiritualität begleitet mich schon mein ganzes Leben. 
                In der Ausbildung „Cosmogetic Healing“ von Jana Haas fand ich schließlich den Puzzlestein, 
                der mir ermöglicht, Menschen tiefergehender und wirkungsvoller zu unterstützen. 
                Ich bin jedes Mal berührt, wenn ich sehe, wie meine Klient:innen nach einer Behandlung,
                einem Gespräch oder einer Mediation Kraft, Mut und Vertrauen erlangen, um ihr Leben wieder freudig gestalten zu können.
            </p>
            {/* <div className="section-circle"></div> */}
        </div>
    )
}

export default UeberMich;