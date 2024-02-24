import React from 'react';

const Angebote = () => {
    return (
        <div className='content'>
            <h2>Angebote</h2>

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

        </div>
    )
}

export default Angebote;