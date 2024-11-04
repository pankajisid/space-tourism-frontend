/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Navbar from './Navbar'
import "./technology.css"
import { assets } from '../assets/assets'
import data from "../data.json";

const Technology = () => {

    const tech_info = data.technology;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (e) => {
        setCurrentIndex(currentIndex => parseInt(e.target.id))
    }
  return (
    <>
        <div className="tech-container">
            <Navbar/>
            <div className="technology">
                <div className="space-launch">
                    <h3><span>03</span>Space launch 101</h3>
                    <div className="launch-details">
                        <ul className="list_123">
                            {[1,2,3].map((item, index)=>(
                                <li onClick={handleClick} className={currentIndex===index ? 'active':""} id={index} key={index}>{item}</li>
                            ))}  
                        </ul>
                        <div className="terminology">
                            <h4>The terminology</h4>
                            <h1>{tech_info[currentIndex].name}</h1>
                            <p>{tech_info[currentIndex].description}</p>
                        </div>
                    </div>
                </div>
                <div className="launch-vehicle">
                    <img src={`${tech_info[currentIndex].images.portrait}`} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Technology