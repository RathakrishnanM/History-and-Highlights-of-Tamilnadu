import Navigation from '../Components/Navigation.js'

import React, { useState } from 'react';
import '../Component_CSS/bestplaces.css';
import mahabalipuram from'../Components/images/BestPlaces//Mahabalipuram.jpg';
import chidamparam from '../Components/images/BestPlaces/Chidamparam.jpg';
import kanyakumari from '../Components/images/BestPlaces/Kanyakumari.jpg';
import madurai from '../Components/images/BestPlaces/Madurai-porthamarai kulam.jpg';
import rameshwaram from '../Components/images/BestPlaces/Rameshwaram.jpg';
import nellai from '../Components/images/BestPlaces/nellai.png';
import thanjavur from '../Components/images/BestPlaces/thanjavur-temple.jpg';
import kanchipuram from '../Components/images/BestPlaces/Kanchipuram.jpg';
import coonoor from '../Components/images/Natural-places/Coonoor.jpg';
import hogenakkal from '../Components/images/Natural-places/Hogenakkal.jpg';
import ooty from '../Components/images/Natural-places/Ooty.jpg';
import pichavaram from '../Components/images/Natural-places/Pichavaram Mangrove Forest.jpg';
import tenkasi from '../Components/images/Natural-places/Tenkasi (1).jpg';
import yercaud from '../Components/images/Natural-places/Yercaud.jpg';
import kodaikanal from '../Components/images/Natural-places/kodaikanal.jpg';
import yelagiri from '../Components/images/Natural-places/yelagiri.jpg';

function Card({ place, image, description }) {
    return (
        <div className="card">
            <img src={image} alt={place} />
            <div className="card-content">
                <h3>{place}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function BestPlaces() {
    const [content, setContent] = useState('historical'); 

    const historicalPlaces = [
        {
            place: 'Mahabalipuram',
            image: mahabalipuram,
            description: 'Home to UNESCO World Heritage Sites, Mahabalipuram showcases ancient rock-cut temples, cave sanctuaries, and iconic shore temples by the Bay of Bengal.',
            
        },
        {
            place: 'Madurai Meenakshi Temple',
            image: madurai,
            description: 'A cultural gem, Madurai beckons with the majestic Meenakshi Amman Temple, an ancient cityscape, and vibrant markets steeped in Tamil tradition.',
            
        },
        {
            place: 'Chidamparam Nadtraj Temple',
            image: chidamparam,
            description: 'Revered for the ancient Nataraja Temple, Chidambaram is a spiritual hub where art, culture, and devotion converge in divine harmony.',
            
        },
        {
            place: 'Kanyakumari',
            image: kanyakumari,
            description: 'At the southernmost tip of India, Kanyakumari captivates with its confluence of three oceans, Vivekananda Rock Memorial, and the spectacular sunrise and sunset views.',
            
        },
        {
            place: 'Thanjai Pragathewara Temple',
            image: thanjavur,
            description: 'Steeped in history, Thanjavur is famed for the Brihadeeswarar Temple, an architectural marvel, and the opulent Chola dynastys cultural legacy.',
            
        },
        {
            place: 'Rameshwaram',
            image: rameshwaram,
            description: 'A sacred pilgrimage site, Rameshwaram boasts the iconic Ramanathaswamy Temple and the ethereal Pamban Bridge, offering a spiritual and scenic retreat.',
            
        },
        {
            place: 'Thirunelveli Nellaiyappar Temple',
            image: nellai,
            description: 'Known for the ancient Nellaiappar Temple and the magnificent Tamirabharani River, Tirunelveli is a blend of rich heritage and natural beauty.',
            
        },
        {
            place: 'Kanchi KailashaNathar Temple',
            image: kanchipuram,
            description: 'Renowned as the "City of Thousand Temples," Kanchipuram is a sacred pilgrimage site and a treasure trove of Dravidian architecture and silk weaving traditions.',
            
        },
        
    ];

    const naturalWonders = [
        {
            place: 'Kodaikanal - Coonoor',
            image: coonoor,
            description: 'Nestled in the Nilgiris, Coonoor charms with its lush tea gardens and the scenic Sims Park, offering a serene escape.',
            
        },
        {
            place: 'Hogenakkal',
            image: hogenakkal,
            description: 'Known as the "Niagara of India," Hogenakkal captivates with its roaring waterfalls and boat rides along the Kaveri River.',
            
        },
        {
            place: 'Kodaikanal - Main',
            image: kodaikanal,
            description: 'Perched in the Western Ghats, Kodaikanal enchants with its pristine lakes, misty landscapes, and the breathtaking Pillar Rocks.',
            
        },
        {
            place: 'Ooty (Udhagamandalam)',
            image: ooty,
            description: 'The Queen of Hill Stations, Ooty beckons with its cool climate, tea estates, and the scenic Nilgiri Mountain Railway.',
            
        },
        {
            place: 'Pichavaram (Mangrove)',
            image: pichavaram,
            description: 'Explore the mangrove forests of Pichavaram, a unique ecosystem with intertwined waterways, creating a stunning labyrinth of natural beauty.',
            
        },
        {
            place: 'Yelagiri',
            image: yelagiri,
            description: 'Nestled in the Eastern Ghats, Yelagiri allures with its peaceful hills, velvety orchards, and a serene artificial lake.',
            
        },
        {
            place: 'Yercaud',
            image: yercaud,
            description: 'Surrounded by emerald green forests, Yercaud is a tranquil hill station known for its pleasant climate and the scenic Emerald Lake.',
            
        },
        {
            place: 'Tenkasi - Kuttramlam',
            image: tenkasi,
            description: 'Known for the Coutrallam Falls and ancient temples, Tenkasi offers a blend of religious significance and picturesque landscapes.',
        },
    ];

    return (
        <>
            <div className='head'>
                <h1>Best Places to Visit in Tamil Nadu</h1>
                <Navigation></Navigation>
            </div>
            <div className="places-container">
            
                <div className='buttons'>
                    <button onClick={() => setContent('historical')}>Historical Places</button>
                    <button onClick={() => setContent('natural')}>Natural Wonders</button>
                </div>

                {content === 'historical' ? (
                    <>
                        <h2>Historical Places</h2>
                        <div className="card-container">
                            {historicalPlaces.map((place, index) => (
                                <Card key={index} place={place.place} image={place.image} description={place.description} />
                            ))}
                        </div>
                    </>
                ) : 
                (
                    <>
                        <h2>Natural Wonders</h2>
                        <div className="card-container">
                            {naturalWonders.map((place, index) => (
                                <Card key={index} place={place.place} image={place.image} description={place.description} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>

        );
}