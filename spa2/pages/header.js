import React from "react";
import '../styles/header.css'
import {Routes, Route} from 'react-router-dom'

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';


const Header =()=>
{
    return(
       
        <Routes>
            <Route path="/" element={<img src={img1} alt="city"></img>}/>
            <Route path="/products" element={<img src={img2} alt="city"></img>}/>
            <Route path="/product/:id" element={<img src={img2} alt="city"></img>}/>
            <Route path="/contact" element={<img src={img3} alt="city"></img>}/>
            <Route path="/admin" element={<img src={img4} alt="city"></img>}/>
            <Route path='/login' element={<img src={img4} alt="city"></img>}/>
            <Route path="*" element={<img src={img5} alt="page not found"></img>}/>
        </Routes>
    )
}

export default Header;