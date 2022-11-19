import React from "react";


const Article =(props)=>
{
    const {title, author, text} = props;
    const styles = {
        mrginTop: "40px"

    }


    return(
        <article style={styles}>
            <h3 style={{marginBottom:"3px", textTransform:"uppercase"}}>{title}</h3>
            <span style={{marginBottom:"10px", display: "block", fontSize:"18px"}}>{author}</span>
            <p style={{fontSize: "15px"}}>{text}</p>
        </article>
    )
}

export default Article;