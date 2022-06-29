import React from "react";
import './Project.css';

var pstyle = {
    margin: 0,    
}

const Project = (props) => {
    var {imageurl, text} = props;
    return(
        <div className="projectProper">
            <img src={imageurl} alt={text}/>
            <p style={pstyle}>{text}</p>
        </div>
    )
}
export default Project;