import React from 'react';

const Angebote = () => {
    return (
        <div className='content'>
            <h2 className='sections' id='angebote'>Angebote</h2>

            <div className='box-angebote'>
                <h3>Energiearbeit und Mentoring</h3>
                <ul className='ul-angebote'>
                    <li className='li-angebote'>Energetisches Handauflegen – Tiefenentspannung, Zelldurchlichtung, Aktivierung der Selbstheilung, Stärkung des Urvertrauens</li>
                    <li className='li-angebote'>Stärkende und heilsame Energien erfahren</li>
                    <li className='li-angebote'>Fernbehandlungen</li>
                    <li className='li-angebote'>Arbeit mit dem „Inneren Kind”</li>
                    <li className='li-angebote'>Meditationen, um Selbstheilung, Urvertrauen und Verbundenheit bewusst zu aktivieren</li>
                    <li className='li-angebote'>Stärkung des Glaubens an sich selbst und an die eigenen Potenziale</li>
                </ul>
            </div>

            <div className='box-angebote'>
                <h3>Konfliktlösung durch Mediation</h3>
                <ul className='ul-angebote'>
                    <li className='li-angebote'>Konfliktberatung</li>
                    <li className='li-angebote'>Konfliktmanagement</li>
                </ul>
            </div>

            <div className='box-angebote'>
                <h3>Systemisches Coaching nach dem Konzept der „Neuen Autorität”</h3>
                <ul className='ul-angebote'>
                    <li className='li-angebote'>Stärkung der persönlichen und beruflichen Professionalität, Präsenz und Autorität</li>
                    <li className='li-angebote'>Beratung von Eltern und Lehrer:innen</li>
                </ul>
            </div>

            <h3>Preise</h3>
            <div className='container-preise'>
                <div className='item-preise'>Kennenlernen des Angebots<br />auch telefonisch, 15 Minuten</div>
                <div className='item-preise'>gratis</div>
                
                <div className='item-preise'>Energiearbeit, 1 Stunde</div>
                <div className='item-preise'>70 €</div>
                
                <div className='item-preise'>Fernbehandlung, nach Absprache</div>
                <div className='item-preise'>40 €</div>
                
                <div className='item-preise'>Mediation, je nach Zeitbedarf<br />pro Stunde</div>
                <div className='item-preise'>70 €</div>
                
                <div className='item-preise'>Coaching nach der „Neuen Autorität”<br />30 Minuten</div>
                <div className='item-preise'>35 €</div>

                <div>
                    <h4>Eröffnungsangebot</h4>
                    <p>3er Block Energiearbeit</p>
                </div>
                <div id='eroeffnungsangebot'>180 €</div>
            </div>

            <h3 className='faq-h3'>Wie verläuft Energiearbeit?</h3>
            <p className='text'>In einem kurzen Gespräch informiere ich dich über die energetische Behandlung,
                wie sie wirkt und dass Emotionen, Bilder,… auftauchen können.
                Ich informiere dich auch darüber, dass ich keine ärztlichen Ratschläge erteile oder Diagnosen erstelle
            </p>
            <p className='text'>
                Danach leite ich dich an, deinen Körper achtsam und dankbar wahrzunehmen, um ganz in dir zu sein.
                In Verbindung mit der lichtvollen geistigen Welt und in liebevoller Verbindung zu dir 
                berühre ich bestimmte Stellen deines Körpers oder arbeite ohne Berührung in deiner Aura. 
                Durch diese Energie gelangst du in eine wundervolle Entspannung, zu Geborgenheit und Urvertrauen. 
                Nun werden in dir Selbstheilung und Zuversicht aktiviert.</p>
            <p className='text'>Eine Einheit dauert ca. eine Stunde.</p>

            <h3 className='faq-h3'>Wie verläuft eine Mediation?</h3>
            <p className='text'>Ich bin eingetragene Mediatorin und habe Erfahrung mit Konflikten im schulischen Umfeld.</p>
            <p className='text'>Durch meine Kenntnisse in der Energiearbeit kann ich anbieten,
                den Konflikt im Anschluss an die Mediation auch auf energetischer Ebene zu lösen.</p>
        </div>
    )
}

export default Angebote;