import React from "react";

const SwitchButton = (props) =>
(
    <button onClick={props.click}>{props.active === false ? 'Start' : 'Stop'}</button>
    
)

export default SwitchButton;