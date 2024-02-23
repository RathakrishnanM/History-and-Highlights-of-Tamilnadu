import Navigation from '../Components/Navigation.js';
import ariyalur from '../Components/images/TN-Districts_Resized/Ariyalur.jpg';
import chengalpattu from '../Components/images/TN-Districts_Resized/Chengalpattu.jpg';
import chennai from '../Components/images/TN-Districts_Resized/chennai.jpg';
import coimbatore from '../Components/images/TN-Districts_Resized/coimbatore.jpg';
import cudalore from '../Components/images/TN-Districts_Resized/Cudalore.jpg';
import dharmapuri from '../Components/images/TN-Districts_Resized/dharmapuri.jpg';
import dindugal from '../Components/images/TN-Districts_Resized/dindugal.png';
import erode from '../Components/images/TN-Districts_Resized/erode.jpg';
import Kallakurichi from '../Components/images/TN-Districts_Resized/Kallakurichi.jpg';
import kanchipuram from '../Components/images/TN-Districts_Resized/Kanchipuram.jpg';
import kanyakumari from '../Components/images/TN-Districts_Resized/Kanyakumari.jpg';
import karur from '../Components/images/TN-Districts_Resized/karur.png';
import krishnagiri from '../Components/images/TN-Districts_Resized/Krishnagiri.jpg';
import madurai from '../Components/images/TN-Districts_Resized/Madurai.jpg';
import myladudurai from '../Components/images/TN-Districts_Resized/Myladudurai.jpg';
import nagappattinam from '../Components/images/TN-Districts_Resized/nagappattinam.jpg';
import namakkal from '../Components/images/TN-Districts_Resized/Namakkal.jpg';
import nilgiri from '../Components/images/TN-Districts_Resized/Nilgiri.jpg';
import perambalur from '../Components/images/TN-Districts_Resized/Perambalur.jpg';
import puthukkottai from '../Components/images/TN-Districts_Resized/Puthukkottai.jpg';
import ramanathapuram from '../Components/images/TN-Districts_Resized/Ramanathapuram.jpg';
import ranipet from '../Components/images/TN-Districts_Resized/Ranipet.jpg';
import salem from '../Components/images/TN-Districts_Resized/Salem.jpg';
import sivagangai from '../Components/images/TN-Districts_Resized/Sivagangai.jpg';
import tenkasi from '../Components/images/TN-Districts_Resized/Tenkasi.jpg';
import tanjavur from '../Components/images/TN-Districts_Resized/Thanjavur.jpg';
import theni from '../Components/images/TN-Districts_Resized/Theni.jpg';
import thirupathur from '../Components/images/TN-Districts_Resized/Thirupathur.jpg';
import thiruppur from '../Components/images/TN-Districts_Resized/Thiruppur.jpg';
import thiruvallur from '../Components/images/TN-Districts_Resized/Thiruvallur.jpg';
import thiruvarur from '../Components/images/TN-Districts_Resized/Thiruvarur.jpg';
import tiruchirappali from '../Components/images/TN-Districts_Resized/Tiruchirappalli.jpg';
import tirunelveli from '../Components/images/TN-Districts_Resized/Tirunelveli.jpg';
import tiruvannamalai from '../Components/images/TN-Districts_Resized/Tiruvannamalai.jpg';
import tutucorin from '../Components/images/TN-Districts_Resized/Tutucorin.jpg';
import vellore from '../Components/images/TN-Districts_Resized/Vellore.jpg';
import viluppuram from '../Components/images/TN-Districts_Resized/Viluppuram.jpg';
import virudhunagar from '../Components/images/TN-Districts_Resized/Virudhunagar.jpg';
import '../Component_CSS/culture.css';

export default function Culture() {
    return (
        <>
            <body>
                <h1>Culture</h1>

                <Navigation className="nav-culture"></Navigation>

                <h2>The Culture and Highlights of Tamilnadu from Each places</h2>
                
                <div className='entire-culture-page'>
                    
                    <div className='culture-overview-content'>
                        Culture is a information or knowledge and mannerism of particular group of people. It includes social habits,
                        religion, language, music, art, marriage, food, what we wear, what we believe, how we greet the visitors and
                        millions of other things.
                        In that one of the great, unique and celebrated culture by over the world is
                        only Tamil culture. I feel too proud to be an Tamilan.
                    </div>

                    <div className='slider-area'>
                        <marquee>
                            <div className='slider'>

                                <div className='item'>
                                    <img className='item-img' src={ariyalur}/>
                                    <div className='item-content'>Ariyalur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={chengalpattu}/>
                                    <div className='item-content'>Chengalpattu</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={chennai}/>
                                    <div className='item-content'>Chennai</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={coimbatore}/>
                                    <div className='item-content'>Coimbatore</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={cudalore}/>
                                    <div className='item-content'>Cudalore</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={dharmapuri}/>
                                    <div className='item-content'>Dharmapuri</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={dindugal}/>
                                    <div className='item-content'>Dindugal</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={erode}/>
                                    <div className='item-content'>Erode</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={Kallakurichi}/>
                                    <div className='item-content'>Kallakurichi</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={kanchipuram}/>
                                    <div className='item-content'>Kanchipuram</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={kanyakumari}/>
                                    <div className='item-content'>Kanyakumari</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={karur}/>
                                    <div className='item-content'>Karur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={krishnagiri}/>
                                    <div className='item-content'>Krishnagiri</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={madurai}/>
                                    <div className='item-content'>Madurai</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={myladudurai}/>
                                    <div className='item-content'>Myladudurai</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={nagappattinam}/>
                                    <div className='item-content'>Nagappattinam</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={namakkal}/>
                                    <div className='item-content'>Namakkal</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={nilgiri}/>
                                    <div className='item-content'>Nilgiri</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={perambalur}/>
                                    <div className='item-content'>Perambalur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={puthukkottai}/>
                                    <div className='item-content'>Puthukkottai</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={ramanathapuram}/>
                                    <div className='item-content'>Ramanathapuram</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={ranipet}/>
                                    <div className='item-content'>Ranipet</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={salem}/>
                                    <div className='item-content'>Salem</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={sivagangai}/>
                                    <div className='item-content'>Sivagangai</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={tenkasi}/>
                                    <div className='item-content'>Tenkasi</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={tanjavur}/>
                                    <div className='item-content'>Thanjavur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={theni}/>
                                    <div className='item-content'>Theni</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={thirupathur}/>
                                    <div className='item-content'>Thirupathur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={thiruppur}/>
                                    <div className='item-content'>Thiruppur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={thiruvallur}/>
                                    <div className='item-content'>Thiruvallur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={thiruvarur}/>
                                    <div className='item-content'>Thiruvarur</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={tiruchirappali}/>
                                    <div className='item-content'>Tiruchirappalli</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={tirunelveli}/>
                                    <div className='item-content'>Tirunelveli</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={tiruvannamalai}/>
                                    <div className='item-content'>Tiruvannamalai</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={tutucorin}/>
                                    <div className='item-content'>Tutucorin</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={vellore}/>
                                    <div className='item-content'>Vellore</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={viluppuram}/>
                                    <div className='item-content'>Viluppuram</div>
                                </div>

                                <div className='item'>
                                    <img className='item-img' src={virudhunagar}/>
                                    <div className='item-content'>Virudhunagar</div>
                                </div>
                            </div>
                        </marquee>
                    </div>
                </div>

                <div className="all-district-links">
                    <div className='link-section-one'>
                        <a href='https://www.tn.gov.in/district_details/537' target='_blank'>Ariyalur</a>
                        <a href='https://www.tn.gov.in/district_details/104949' target='_blank'>Chengalpattu</a>
                        <a href='https://www.tn.gov.in/district_details/535' target='_blank'>Chennai</a>
                        <a href='https://www.tn.gov.in/district_details/538' target='_blank'>Coimbatore</a>
                        <a href='https://www.tn.gov.in/district_details/557' target='_blank'>Cudalore</a>
                        <a href='https://www.tn.gov.in/district_details/560' target='_blank'>Dharmapuri</a>
                        <a href='https://www.tn.gov.in/district_details/562' target='_blank'>Dindugal</a>
                        <a href='https://www.tn.gov.in/district_details/564' target='_blank'>Erode</a>
                    </div>
                    <div className='link-section-two'>
                        <a href='https://www.tn.gov.in/district_details/104951' target='_blank'>Kallakurichi</a>
                        <a href='https://www.tn.gov.in/district_details/569' target='_blank'>Kanchipuram</a>
                        <a href='https://www.tn.gov.in/district_details/573' target='_blank'>Kanyakumari</a>
                        <a href='https://www.tn.gov.in/district_details/575' target='_blank'>Karur</a>
                        <a href='https://www.tn.gov.in/district_details/1198' target='_blank'>Krishnagiri</a>
                        <a href='https://www.tn.gov.in/district_details/578' target='_blank'>Madurai</a>
                        <a href='https://www.tn.gov.in/district_details/110151' target='_blank'>Myladudurai</a>
                        <a href='https://www.tn.gov.in/district_details/580' target='_blank'>Nagappattinam</a>
                    </div>
                    <div className='link-section-three'>
                        <a href='https://www.tn.gov.in/district_details/584' target='_blank'>Namakkal</a>
                        <a href='https://www.tn.gov.in/district_details/582' target='_blank'>Nilgiri</a>
                        <a href='https://www.tn.gov.in/district_details/587' target='_blank'>Perambalur</a>
                        <a href='https://www.tn.gov.in/district_details/591' target='_blank'>Puthukkottai</a>
                        <a href='https://www.tn.gov.in/district_details/593' target='_blank'>Ramanathapuram</a>
                        <a href='https://www.tn.gov.in/district_details/104955' target='_blank'>Ranipet</a>
                        <a href='https://www.tn.gov.in/district_details/595' target='_blank'>Salem</a>
                        <a href='https://www.tn.gov.in/district_details/1548' target='_blank'>Sivagangai</a>
                    </div>
                    <div className='link-section-four'>
                        <a href='https://www.tn.gov.in/district_details/104953' target='_blank'>Tenkasi</a>
                        <a href='https://www.tn.gov.in/district_details/1552' target='_blank'>Thanjavur</a>
                        <a href='https://www.tn.gov.in/district_details/1553' target='_blank'>Theni</a>
                        <a href='https://www.tn.gov.in/district_details/104957' target='_blank'>Thirupathur</a>
                        <a href='https://www.tn.gov.in/district_details/1566' target='_blank'>Thiruppur</a>
                        <a href='https://www.tn.gov.in/district_details/1556' target='_blank'>Thiruvallur</a>
                        <a href='https://www.tn.gov.in/district_details/1560' target='_blank'>Thiruvarur</a>
                        <a href='https://www.tn.gov.in/district_details/1564' target='_blank'>Tiruchirappalli</a>
                    </div>
                    <div className='link-section-five'>
                        <a href='https://www.tn.gov.in/district_details/1562' target='_blank'>Tirunelveli</a>
                        <a href='https://www.tn.gov.in/district_details/1558' target='_blank'>Tiruvannamalai</a>
                        <a href='https://www.tn.gov.in/district_details/1578' target='_blank'>Tutucorin</a>
                        <a href='https://www.tn.gov.in/district_details/1580' target='_blank'>Vellore</a>
                        <a href='https://www.tn.gov.in/district_details/1582' target='_blank'>Viluppuram</a>
                        <a href='https://www.tn.gov.in/district_details/1584' target='_blank'>Virudhunagar</a>
                    </div>
                </div>
            </body>
        </>
    );
}