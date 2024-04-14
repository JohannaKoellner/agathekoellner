import React from "react";
import Portrait1 from "../assets/Portrait1.jpeg";

const Hero = () => {
    return (
        <div className="hero">
            <h1>Energetikerin • Mediatorin • Mentorin</h1>
            <img className="photo-circle" src={Portrait1} alt="Porträtfoto von Agathe Köllner" />
            <div className="circle quote-circle">
                <p className="quote">
                    "In liebevoller Verbundenheit möchte ich dich stärken und dich befähigen, ganz im Urvertrauen zu sein, sodass du mit Zuversicht, Gelassenheit und Mut dein Leben gestalten kannst."
                </p>
            </div>
        </div>
    )
}

export default Hero;