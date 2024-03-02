import React from "react";
import Frau1 from "../assets/Frau1.png";
import Frau2 from "../assets/Frau2.png";



const Testimonials = () => {
    return (
        <div className="content">
            <h2 className='sections' id='testimonials'>Testimonials</h2>

            <div className="testimonial-cards">
                {testimonialData.map((t) => 
                (
                    <div className="card">
                        <img src={t.img} alt="Grafik eines Menschen" className="testimonial-img"/>
                        <h3>{t.name}</h3>
                        <p>{t.review}</p>
                    </div>
                )
                )}
            </div>

        </div>
    )
}

const testimonialData = [
    {
        img: Frau1,
        name: 'Margrit',
        review: 'Deine Behandlung hat mich in einer Zeit, in der es mir gesundheitlich ganz schlecht ging und ich mich kaum bewegen konnte, sehr dabei unterstützt, wieder gesund zu werden. Ich bin mir sicher, dass die wohltuende, meditative Entspannung, die du mir mit deinen sanften Berührungen zuteilwerden hast lassen, einen wesentlichen Beitrag zu meiner Genesung geleistet hat. Ich danke dir von Herzen dafür!'
    },

    {
        img: Frau2,
        name: 'Diana',
        review: 'Agathe steht in einer starken Verbindung zur heilenden Kraft und ist fähig heilsame Energien weiterzugeben. In einer Atmosphäre von Frieden und Harmonie ist sie eine sehr gute Zuhörerin, gibt fundierte Ratschläge, um Probleme zu beheben und zu guten Lösungen zu kommen.'
    },

    {
        img: {Frau1},
        name: 'Beate',
        review: 'Agathe zu beschreiben, könnte länger dauern, jedoch in einem Wort MAGISCH. 100% authentisch und sie erlaubt sich, alles zu sein. Und immer genau das, was ihr Gegenüber in diesem Augenblick braucht, um weiterzukommen. Ihre Inputs sind direkt, punktgenau und doch so voller Liebe. Jedes Gespräch mit ihr ist eine Offenbarung, ein Geschenk für die Unendlichkeit.'
    },

    {
        img: {Frau1},
        name: 'Monika',
        review: 'Eine Auszeit "nur" für mich! Nach einem herzlichen Willkommen und einem Gespräch - in dem Frau Köllner aufmerksam zuhörte und vorsichtig nachfragte - fühlte ich mich gleich sehr wohl und spürte: In dieser Stunde geht es um mich und mein Wohlergehen! Die sanften Berührungen - bequem liegend und fürsorglich zugedeckt - führten mich in eine tiefe Entspannung. Nach der Behandlung war auch noch Zeit über mein "Erlebtes" zu sprechen. So sorgsam wie Frau Köllner die Berührungen platziert hatte und nach der Frage, ob ich das auch wolle, beschrieb nun Sie Ihre Eindrücke der Behandlung. Ich fühlte mich körperlich erholt und geistig entspannt. Auch in den nächsten Tage war noch etwas zu spüren: Ein Kribbeln da - eine Erinnerung der Berührung dort.'
    },

    {
        img: {Frau1},
        name: 'Paul',
        review: 'Frau Köllner vermittelt Spiritualität, die den gesamten Alltag umfasst, eine bestimmte Art der Lebensführung und die Fähigkeit das „zweite Gesicht“ der Dinge wahrzunehmen! Mit Leichtigkeit nimmt sie einem die Schwierigkeit des „sich selber Annehmens“. Ich bin sehr überrascht von der Wirkung der Fernbehandlungen, die bei mir eine tiefe Entspannung, Nähe und Wärme bewirken. Dabei habe ich das Gefühl im Licht zu baden!'
    },

    {
        img: {Frau1},
        name: 'Anna-Leena',
        review: 'Du bist für mich der Inbegriff der Urmutter und Mutter Erde (Pachamama) und eine wahre Hüterin der Weiblichkeit! Es ist so schön, dass Du Deinem Ruf folgst und Dich der Heilung der Frauenkraft verschrieben hast. Du bist eine starke Frau, die in der Fülle lebt und diese so selbstverständlich mit anderen teilt. Dank Deiner einfühlenden Art, durch Dein aufmerksames Zuhören und durch Deine energetischen Behandlungen mittels Cosmogetic Healing konnten bei mir u.a. Thematiken wie meine verletzten weiblichen Anteile, Anteile meines inneren Kindes und auch Mutterthemen in Heilung geraten. Auch Deine Schutzengelmeditationsrunden werden mir immer unvergesslich in Erinnerung bleiben! Ich fühle mich bei Dir geborgen und es ist jedes Mal ein wundervolles Erlebnis von Dir behandelt zu werden. Danke für Dein Sein und Dein Wirken!'
    }
]

export default Testimonials;

