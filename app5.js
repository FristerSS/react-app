import React, {Component} from 'react';
import './app5.scss'
import {Text} from './Text'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Footer} from './Footer'


class App extends Component
{   
    state = {
        underline: false
    }

    render()
    {
      
       

       

        // eslint-disable-next-line no-lone-blocks
        {/*const styles = {
            btn_off: {
                border: "4px solid black", 
                padding: '10px 20px',
                fontFamily: 'arial',
                fontSize: 30,
                display: 'block',
                margin: '20px auto',
                backgroundColor: 'red'
            },
            btn_on : {
                border: "4px solid black", 
                padding: '10px 20px',
                fontFamily: 'arial',
                fontSize: 30,
                display: 'block',
                margin: '20px auto',
                backgroundColor: 'green',
                color: 'white'
            }
        }

        let btn = {
                border: "4px solid black", 
                padding: '10px 20px',
                fontFamily: 'arial',
                fontSize: 30,
                display: 'block',
                margin: '20px auto',
                backgroundColor: 'white',
                color: 'white'
            
        }

        if(this.state.active)
        {
            btn.backgroundColor = 'green';
        }else
        {
            btn.backgroundColor = 'red';
        }*/}
        
        const text = 'Witaj!'

        const classes = ['one']

        if(this.state.underline)
            classes.push(' line')
        
        if(text.length > 10)
            classes.push(' big')
       
        return(
            <>
            <div className='app' onClick={() => this.setState({underline: !this.state.underline})}>
                <h1 className={classes}> {text}</h1>
                <Text/>
                <Footer/>
            </div>
            </>
        )
        
    }
}

export default App;