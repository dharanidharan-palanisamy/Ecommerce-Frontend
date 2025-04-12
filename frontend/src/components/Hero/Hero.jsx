import React from 'react';
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return ( 
        <div className="hero">
            <div className="hero-left">
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>Available</p>
                </div>
                <div className="hero-latest-btn" onClick={()=>navigate('/men')}>
                    <div>Explore Now</div>
                    <img src={arrow_icon} alt="" className='explore'/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" width="750px" height="550px"/>
            </div>
        </div>
     );
}
 
export default Hero;