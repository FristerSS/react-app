import React, {Component} from "react";
import './spa.css';
import {BrowserRouter as Router,  Route, Routes, NavLink, Switch} from 'react-router-dom';

const Home = () =>
(<h1>Start</h1>)

const News = () =>
{return (<h1>News</h1>)}

const Contact = () =>
(<h1>Contact</h1>)

const ErrorPage = () =>
{
    return (<h1>Strona nie istnieje !</h1>)
}

class App extends Component
{
    render()
    {
        return(
            <Router>
            <header>
                <nav>
                    {/*<li><a href="/">Start</a></li>
                    <li><a href="/news">Aktualności</a></li>
                    <li><a href="/contact">Kontakt</a></li>*/}
                    <li><NavLink to="/" 
                    className={(navData => (navData.isActive ? "home_selected" : " none"))}
                    >Start</NavLink></li>
                    <li><NavLink to="/news" 
                    className={(navData => (navData.isActive ? "home_selected" : " none"))}>Aktualności</NavLink></li>
                    <li><NavLink to="/contact" 
                    className={(navData => (navData.isActive ? "home_selected" : " none"))}>Kontakt</NavLink></li>
                </nav>
            </header>
            <section>
               <Routes>
              
                    <Route path='/' element={<Home/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
               
               </Routes>
            </section>
            </Router>
        )
    }
}

export default App;