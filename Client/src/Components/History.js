import Navigation from '../Components/Navigation.js';
import React, { useState } from 'react';
import '../Component_CSS/history.css';
import chola from '../Components/images/Kindom/Chola_Flag.png';
import chera from '../Components/images/Kindom/Chera_Flag.png';
import Pandiya from '../Components/images/Kindom/pandiyan_flag.jpg';
import maratha from '../Components/images/Kindom/Maratha_Empire1.jpg';
import vijayanagara from '../Components/images/Kindom/VijayaNagara_Empire1.jpg';
import pallava from '../Components/images/Kindom/Pallavas_Empire1.jpg';
import nayakkas from '../Components/images/Kindom/Nayakkas_Empire1.jpg';
import chola_mid from '../Components/images/Kindom/Chola_Medieval1.jpg';
import sangam from '../Components/images/Historical/Sangam Literature1.jpg';
import CavePaintings from '../Components/images/Historical/Sittanavasal Cave In Tamil Nadu1.jpg';
import Poompuhar from '../Components/images/Historical/Poombhugar1.jpg';
import Mahabalipuram from '../Components/images/Historical/mahabalipuram1.jpg';
import TamilScripts from '../Components/images/Historical/Ancient Tamil Script1.jpg';
import Thiruvalluvar from '../Components/images/Historical/Thiruvalluvar1.jpg';
import CholaBronze from '../Components/images/Historical/Ancient Chozha bronze1.jpg';
import TamilPorts from '../Components/images/Historical/TN ports1.png';

function Card({ title, image, description }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function History() {
    const [content, setContent] = useState('rulers');

    const rulers = [
        {
            title: 'Chera Dynasty',
            image: chera,
            description: 'The Chola Dynasty was one of the longest-ruling dynasties in Tamil Nadu known for its military prowess and cultural achievements.'
        },
        {
            title: 'Chola Dynasty',
            image: chola,
            description: 'The Pallava Dynasty contributed to the Dravidian architecture and art, leaving behind impressive monuments like Mahabalipuram.'
        },
        {
            title: 'Pandiya Dynasty',
            image: Pandiya,
            description: 'The Chola Dynasty was one of the longest-ruling dynasties in Tamil Nadu known for its military prowess and cultural achievements.'
        },
        {
            title: 'Pallava Dynasty',
            image: pallava,
            description: 'The Pallava Dynasty contributed to the Dravidian architecture and art, leaving behind impressive monuments like Mahabalipuram.'
        },
        {
            title: 'Vijayanagara Dynasty',
            image: vijayanagara,
            description: 'The Chola Dynasty was one of the longest-ruling dynasties in Tamil Nadu known for its military prowess and cultural achievements.'
        },
        {
            title: 'Maratha Dynasty',
            image: maratha,
            description: 'The Pallava Dynasty contributed to the Dravidian architecture and art, leaving behind impressive monuments like Mahabalipuram.'
        },
        {
            title: 'Nayakka Dynasty',
            image: nayakkas,
            description: 'The Chola Dynasty was one of the longest-ruling dynasties in Tamil Nadu known for its military prowess and cultural achievements.'
        },
        {
            title: 'Chola Dynasty (medieval)',
            image: chola_mid,
            description: 'The Pallava Dynasty contributed to the Dravidian architecture and art, leaving behind impressive monuments like Mahabalipuram.'
        },
    ];

    const extraordinaryHistory = [
        {
            title: 'Sangam Literature',
            image: sangam,
            description: 'Tamil Nadu\'s Sangam literature, dating back centuries, includes works like "Silappatikaram," offering glimpses into ancient Tamil culture.'
        },
        {
            title: 'Cave Paintings of Tamil Nadu',
            image: CavePaintings,
            description: 'Ancient cave paintings in Sittanavasal and Alagarmalai depict daily life scenes, representing some of Tamil Nadu\'s oldest surviving art.'
        },
        {
            title: 'Ancient Port City of Poompuhar',
            image: Poompuhar,
            description: 'Poompuhar, a historical port city, mentioned in Sangam literature, reveals archaeological remnants and insights into early maritime trade.'
        },
        {
            title: 'Rock-Cut Temples of Mahabalipuram',
            image: Mahabalipuram,
            description: 'Mahabalipuram\'s rock-cut temples, from the Pallava era, such as "Descent of the Ganges," showcase ancient Tamil rock-cut architecture',
        },
        {
            title: 'Ancient Tamil Scripts',
            image: TamilScripts,
            description: 'Ancient inscriptions on stone beds and temple walls serve as historical records, documenting events and achievements in ancient Tamil Nadu.'
        },
        {
            title: 'Thiruvalluvar\'s "Thirukkural"',
            image: Thiruvalluvar,
            description: 'Thiruvalluvar\'s "Thirukkural," a classic Tamil text over 2,000 years old, imparts timeless wisdom on virtues, wealth, and love.'
        },
        {
            title: 'Ancient Chola Bronzes',
            image: CholaBronze,
            description: 'Tamil Nadu\'s ancient Chola bronze sculptures, exemplified by the Nataraja statue in Chidambaram, reflect Chola-period artistic and metallurgical excellence.'
        },
        {
            title: 'Ancient Tamil Nadu Trade Routes',
            image: TamilPorts,
            description: 'Tamil Nadu\'s historical trade connections with Rome and Southeast Asia highlight its significance as a center of commerce and cultural exchange.'
        },
    ];

    return (

        <>
            <div className='head'>
                <h1>History of Tamil Nadu</h1>
                <Navigation></Navigation>
            </div>

        <div className="history-container">

            
            {content === 'rulers' ? (
                <>
                    <>
                    <h2>History</h2>
                    <div className="card-container">
                        {extraordinaryHistory.map((fact, index) => (
                            <Card key={index} title={fact.title} image={fact.image} description={fact.description} />
                        ))}
                    </div>
                </>
                </>
            ) : (
                <>
                    <h2>Rulers of Tamil Nadu</h2>
                    <div className="card-container">
                        {rulers.map((ruler, index) => (
                            <Card key={index} title={ruler.title} image={ruler.image} description={ruler.description} />
                        ))}
                    </div>
                </>
            )}
        </div>
        </>
    );
}