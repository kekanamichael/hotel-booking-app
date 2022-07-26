import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '../css/Home.css'
import {GrLocation} from 'react-icons/gr'
import {FiPhoneCall} from 'react-icons/fi'
import {BsFillClockFill} from 'react-icons/bs'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

import {MdEmail} from 'react-icons/md'
import froom from '../Files/pexels-vecislavas-popa-1743231.jpg'
import sroom from '../Files/pexels-malidate-van-833045.jpg'
import troom from '../Files/comfort-triple-room-992x992.jpg'



function Home() {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll",()=> {
            if(window.scrollY > 300){
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, [])

    const scrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const home = useRef(null);
    const about = useRef(null);
    const services = useRef(null);
    const gallery = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

  return (
    <body className='maindiv'>
        <div className='navcontainer'>
            <div>
                {showBtn && <BsFillArrowUpSquareFill onClick={scrollTop} className='toparrow'/>}
            </div>
            <nav className="navigation">
                <ul>
                <li className='logo'><Link className='logLink' to="/">Logo</Link></li>
                </ul>
              
                <ul >
                    <li className='navmenu'><Link to="" onClick={() => scrollToSection(home)} className='homelink' >Home</Link></li>
                    <li className='navmenu'><Link to="" onClick={() => scrollToSection(about)}  className='navmenu' >About</Link></li>
                    <li className='navmenu'><Link to="" onClick={() => scrollToSection(services)}  className='navmenu' >Services</Link></li>
                    <li className='navmenu'><Link to="" onClick={() => scrollToSection(gallery)}  className='navmenu' >Gallery</Link></li>
                    <li className='navmenu'><Link to="" onClick={() => scrollToSection(contact)}  className='navmenu' >Contact Us</Link></li>
                    <li className='navmenu'><Link  className='regLink' to="/Register">Register</Link></li>
                    <li className='navmenu'><Link className='logLink' to="/Login">Login</Link></li>
                </ul>
            </nav>
        </div>
        <div className='bd'>
        <div className='welcome' ref={home}>
            <div className='back'>
                <br/>
                <center>
                <h1 className='slogan'>Luxury is not a place,<br/> it's an experience.</h1>
            <p className='para'>The Hotel Luviana is the right choice for visitors who are searching for a combination of charm, peace, quiet and a convenient position from where to explore surroundings.</p>
             <Link to='/' className='info'>More Info</Link> 
            </center>
            <br />
            <br />
            
            <br />
            </div>
        </div>
        <br/>
        <br/>
        <div className='search'>
        <h4>MAKE A RESERVATION</h4>
                           <form className='booking'>
                           <div> 
                <label className='label1'>Check In:</label><label className='label2'>Check Out:</label><label className='label2'>Adult:</label><label className='label2'>Children:</label><br/>
                <input className='date' type='date'></input>
                <input className='date1' type='date'></input>

                <select className='date1'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
                <select className='date1'>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                
                <button className='btn'>SEARCH</button>
                </div>

            </form>
        </div>
        <div className='secdiv' ref={about}>
            <br/><br/><br/><br/>
            <center> <h1>About Us</h1></center>
              <div className='about' >
                
                <div className='sidediv'>
                    
                    <div className='line'></div>
                    <p>
                        DISCOVER THE CHARM OF THE LUVIANA   
                    </p>
                    <h1>Welcome to the hotel LUVIANA</h1>
                </div>
                <div className='sec'>
                    <p className='luvi'>
                        It is a small comfortable hotel. Our staff offers an attentive high-quality service and is always ready to offer any help to guests. <br/> <br/>
                        The hotel is arranged on three floors. On the ground floor, apart from the reception, there is a comfortable lounge where you can sit and drink tea or just read. There is also a splendid terrace, where you can relax and immerse yourself into upcoming morning of a new wonderful day in the atmosphere of Venetian daily life, watch the city fuss & people who are gathering together and whose conversations fill all the streets and alleys. There is an amazing fusion of calm and tranquility at hotel with hectic and noise outside.
                    </p>
                </div>
            </div>
            <div className='header4' ref={services}>
                <hr/>
                <center><h1>Services & Facilities</h1><p className='class'>Exceptional service - endless possibilities</p></center>

                <hr/>
            </div>
           
            <div className='service' >
                <div className='serContainer'>
                    <div className='box one'>
                        <p className='serve'>24 Hour Room Service</p>
                    </div>
                    <div className='box two'>
                        <p className='serve'>Laundry and valet service</p>
                    </div>
                    <div className='box three'>
                        <p className='serve'>Dry Cleaning </p>
                    </div>
                    <div className='box four'>
                        <p className='serve'>Doctor on Call</p>
                    </div>
                    <div className='box five'>
                        <p className='serve'>Car Rental Services</p>
                    </div>
                    <div className='box six'>
                        <p className='serve'>Courier services</p>
                    </div>
                </div>
                <div className='galContainer' ref={gallery}>
                <div className='gal'>
                    <div className='line'></div>
                    <div className='headers'>
                        <div><h1 className='rooms'>Rooms & Suites</h1>DISCOVER THE CHARM OF THE LUVIANA</div>
                        <div className='view'>
                            <Link to="">View All</Link>
                        </div>
                    </div>
                    <br/>
                    <div className='suits'>
                        <div className='room first'><img className='images12' src={froom} alt='Superior Double Room'></img>Superior Double Room<br/> <p>R129 per Night</p></div>
                        <div className='room second'><img className='images12' src={sroom} alt='Superior Double Room'/>Classic Double Room<br/> <p>R189 per Night</p></div>
                        <div className='room third'><img className='images12' src={troom} alt='Superior Double Room'/>Comfort Triple Room<br/> <p>R219 Per Night</p></div>
                    </div>
                </div>
            </div>
                <div className='conContainer' ref={contact}>
                        <h1>Contact Us</h1>
                        <p className='contactUs'>
                               Feel free to contact us directly if you have any inquiries regarding accommodation.<br/>
                               We would love to have you stay with us!
                        </p>
                        <center>
                            <br/><br/><br/>
                    <div className='getIntouch'>
                        <div className='sendmessegage'>
                            <h1>Get in Touch With Us</h1>
                            <p style={{fontSize:"20px"}}>Providing you have any questions don’t hesitate to contact our team.<br/> We are always here to answer your questions.</p>
                            <input className='touch' placeholder='Enter Email address...'/>
                            <input className='touch' placeholder='Subject'/> <br/>
                            <textarea className='message' placeholder='Type a message...'></textarea><br/>
                            <button className='send'>Send Message</button><br/><br/><br/>
                        </div>      
                    <div className='con'>
                      <div className='contact location'>
                        <h3 className='loc'>Our location</h3>
                        <div className='wrapper'>
                            <div><GrLocation className='icon'/></div>
                            <p className='address'>
                                27 troye street <br/>
                                Sunnyside <br/>
                                Pretoria <br/>
                                0002
                            </p> 
                        </div>
                        
                      </div>
                      <div className='contact phone'>
                        <h3 className='pho'>Call us</h3>
                        <div className='wrapper'>
                            <div><FiPhoneCall className='icon'/></div>
                            <p className='call'>
                                +27 71 645 5956 <br/>
                                +27 21 415 6686 <br/>
                                +27 80 836 5987
                            </p>
                        </div>
                    
                      </div>
                      <div className='contact hours'>
                        <h3 className='wor'>Working Hours</h3>
                        <div className='wrapper'>
                            <BsFillClockFill className='icon'/>
                            <p className='workHours'>
                                Mon to Fri: 07:00-20:00 <br/>
                                Suturday: 07:00-18:00 <br/>
                                Sunday: 09:00-16:00
                            </p>
                        </div>
                        
                      </div>
                      <div className='contact email'>
                        <h3 className='mail'> Email Us</h3>
                        <div className='wrapper'>
                        <div><MdEmail className='icon'/></div>
                            <div>
                                <p className='emailUs'>
                                     hotels@gmail.com <br/>
                                     kekanamichael1999@gmail.com
                                </p>
                            </div>
                        </div>
                      </div>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.61371427051!2d28.20111372979074!3d-25.75028499959227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95621fd4569769%3A0x6f56cc2438eae7f9!2s27%20Troye%20St%2C%20Sunnyside%2C%20Pretoria%2C%200002!5e0!3m2!1sen!2sza!4v1656660600396!5m2!1sen!2sza"
                         style={{width:"100%", height:"350px", marginTop:'70px', marginLeft:"20px"}} 
                          allowfullscreen="" 
                          loading="lazy"
                           referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                    </div>
                    
                    </center>
                </div>
            </div>
       
        </div>
        </div>
    </body>
  )
}
 
export default Home