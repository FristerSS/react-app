import React from "react";
import "./addTask.css"


class AddTask extends React.Component
{
    minDate = new Date().toISOString().slice(0, 10)
    state = {
        text : '',
        checked : false,
        date: this.minDate
    }

    handleText = (e) =>
    {
        this.setState({
            text: e.target.value
        })
    }

    
    handleCheckBox= (e) =>
    {
        console.log(e)
        this.setState({
            checked: e.target.checked
        })
    }

    handleOnChange = (e) =>
    {      
        this.setState({
            date: e.target.value
        })

  
    }

    handleClick = () =>
    {
        const {text, checked, date} = this.state;

        if(text.length > 2)
        {
            if(this.props.addTask(text, date, checked))
            {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate
                })
            }
        }else
        {
            alert('za krótka nazwa')
        }
    

    }

    render()
    {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate+"-12-31";

        return(
            <div className="form">

                <input type="text" placeholder="Dodaj zadanie" 
                onChange={this.handleText}
                value={this.state.text}/>

                <input type="checkbox" 
                checked={this.state.checked}
                onChange={this.handleCheckBox}
                id="important"/>

                <label htmlFor="important">Priorytet</label>
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" 
                onChange={this.handleOnChange}
                value={this.state.date} 
                min={this.minDate} 
                max={maxDate}/>

                <button onClick={this.handleClick}>Dodaj</button>
                <hr/>
            </div>
          
        )
    }
}

export default AddTask;