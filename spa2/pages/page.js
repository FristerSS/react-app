import React from "react";
import {Routes, Route} from 'react-router-dom';
import '../styles/page.css';

import HomePage from "./homePage.js";
import ProductsPage from "./productsPage.js";
import ProductListPage from "./productListPage.js";
import ContactPage from "./contactPage.js";
import AdminPage from "./adminPage.js";
import ErrorPage from "./errorPage.js";

const handleSubmit = (e) =>
{
    e.preventDefault();
    console.log(e.target.value)
}


const Page = () =>
{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductListPage/>}/>
            <Route path='/product/:id' element={<ProductsPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/login' element={<div >
                <h3>Logowanie</h3>
                <form onSubmit={handleSubmit}
                style={{display:"flex", flexDirection:"column", minHeight:"20vh"}}>
                
                <label htmlFor="login" style={{marginTop:"20px"}}>Login</label>
                <input type="text" name="login" style={{width:"10vw"}}>
                </input>
                
                <label htmlFor="password">Hasło</label>
                <input type="password" name="password" style={{width:"10vw"}}>
                </input>
   
                <button style={{width:"5vw", marginTop:"10px"}}>Zaloguj</button>
                </form>
                </div>}/>
        </Routes>
    )
}

export default Page;