import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./crew.css"
import { assets } from '../assets/assets'
import data from "../data.json";

const Crew = () => {

    const crew_info = data.crew;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (e) => {
        setCurrentIndex(parseInt(e.target.id));
    }

    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % 4);
        }, 3000);
    
        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    },[currentIndex])

  return (
    <>
        <div className="crew-container">
            <Navbar/>
            <div className="crew-member-container">
                <div className="member-info">
                    <h3><span>02</span> Meet your crew</h3>
                    <div className="info">
                        <h2>{crew_info[currentIndex].role}</h2>
                        <h2>{crew_info[currentIndex].name}</h2>
                        <p>{crew_info[currentIndex].bio}</p>
                    </div>
                    <ul className="navigate-crew">
                        <li className={currentIndex ===0 ? 'active': ""} onClick={handleClick} id="0"></li>
                        <li className={currentIndex ===1 ? 'active': ""} onClick={handleClick} id="1"></li>
                        <li className={currentIndex ===2 ? 'active': ""} onClick={handleClick} id="2"></li>
                        <li className={currentIndex ===3 ? 'active': ""} onClick={handleClick} id="3"></li>
                    </ul>
                </div>
                <div className="member-image">
                    <img src={crew_info[currentIndex].images.png.slice(1)} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Crew