import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/destination" element={<Destination/>}></Route>
        <Route path="/crew" element={<Crew/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
      </Routes>
    </>
  )
}

export default App