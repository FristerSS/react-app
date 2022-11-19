import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";


function FindLocation(path, id){

    let text;
    if(path === 'products')
    {
            text = 'stronie produkty.'
    }else if(path === 'product')
    {
        text = 'stronie produktu o id ' + id + '.'
    }else if(path === 'contact')
    {
        text = 'stronie kontaktowej. '
    }else if(path === '')
    {
        text = 'stronie głównej.' 
    }else if(path === 'login')
    {
        text = 'stronie panelu administracji.'
    }


    return text;
}

const Footer =()=>
{
    const location = useLocation();
    const path =location.pathname.split('/')[1];
    const id = location.pathname.split('/')[2];



    return(
        
        <div id="Footer">
          {/*  <Routes>
            <Route path='/' element={
            
                
                <div>TTT</div>
            }/>
            </Routes>*/}

            <p>Jesteś na <span style={{color:"yellow"}}>{FindLocation(path, id)}</span></p>
            
         
        </div>
    )
}

export default Footer;