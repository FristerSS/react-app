import React from "react";
import {Component} from "react";
import SwitchButton from "./switchButton.js";

class App extends Component
{
  state = {
    time: 0,
    active: false
  }

  addSeconds = ()=>
  {
    this.setState({
      time: this.state.time + 1
    })
  }
 
  handleClick = () =>
  {
    if(this.state.active)
    {
      clearInterval(this.idInterval);
    }else
    {
       this.idInterval = setInterval(() => this.addSeconds(), 1000);
    }

    this.setState({
      active: !this.state.active
    })
  }


  render()
  {

    return(
      <>
      <p >{this.state.time}</p>
      <SwitchButton click={this.handleClick} active={this.state.active}/>
      </>
    )
  }
}




export default App;
