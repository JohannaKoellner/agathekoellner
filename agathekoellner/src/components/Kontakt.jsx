import React from "react";
import { Mail, Phone } from 'react-feather';

const Kontakt = () => {
    return (
        <div className="content contact">
            <h2 className='sections' id='kontakt'>Kontakt</h2>
            <address>
                Terminvereinbarung unter <br />
                <div className="indent">
                    <Phone size={16}/> <a href="tel:+4369912734270" className="visible-link">0699/12734270</a>
                    <br />
                    <Mail size={16}/> <a href="mailto:info@agathekoellner.at" className="visible-link">info@agathekoellner.at</a>
                </div>
            </address>

            <p className="text">
                Ich freue mich auf Sie/dich im Studio:<br />
                <div className="indent">
                    Hauptstraße 119/GL4<br />
                    3021 Pressbaum
                </div>
            </p>

        </div>
    )
}

export default Kontakt;