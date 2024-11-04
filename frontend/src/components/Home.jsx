import React from 'react';
import "./home.css";
import Navbar from "./Navbar.jsx";
import { assets } from '../assets/assets.js';

const Home = () => {
  return (
    <>
    <div className="full-container">
      <Navbar />
      <div className="home-container">
        <div className="space-info">
          <h3>So, You want to travel to</h3>
          <h1>SPACE</h1>
          <p>Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a trule out of this world experience! </p>
        </div>
        <div className="explore">
          <p>Explore</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home