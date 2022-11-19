import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom"
import'./styles/styles.css'
import Header from './pages/header.js'
import Navigation from './pages/navigation.js'
import Page from './pages/page.js'
import Footer from './pages/footer.js'

class App extends Component
{
    render() 
    {
        return (
         
            <Router>
                <div className="app">
                    <header>
                        {<Header/>}
                    </header>
                    <main>
                        <aside>
                            {<Navigation/>}
                        </aside>
                        <section className="page">
                            {<Page/>}
                        </section>
                    </main>
                    <footer>
                        {<Footer/>}
                    </footer>

                </div>
            </Router>
           
        )
    }

}


export default App;
