import React, { useState } from 'react'
import Navbar from './Navbar'
import "./destination.css"
import { assets } from '../assets/assets'
import data from "../data.json";

const Destination = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (e) => {
        setCurrentIndex(parseInt(e.target.id));
    }

  return (
    <>
        <div className="dest-container">
            <Navbar/>
            <div className="destionations">
                <div className="destination-planet">
                    <h1>01 pick your destionation</h1>
                    <img src={`${data.destinations[currentIndex].images.png.slice(1)}`} alt="" />
                </div>
                <div className="planet-details">
                    <ul className="planet_list">
                        {["Moon", "Mars", "Europa", "Titan"].map((item, index)=>(
                            <li key={index} onClick={handleClick} id={index} className="planet_listItem">{item}</li>
                        ))}
                    </ul>
                    <h1>{data.destinations[currentIndex].name}</h1>
                    <p>{data.destinations[currentIndex].description}</p>
                    <div className="distance-travel-time">
                        <div className="distance">
                            <h4>Avg. distance</h4>
                            <h2>{data.destinations[currentIndex].distance}</h2>
                        </div>
                        <div className="travel-time">
                            <h4>est. travel time</h4>
                            <h2>{data.destinations[currentIndex].travel}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Destination