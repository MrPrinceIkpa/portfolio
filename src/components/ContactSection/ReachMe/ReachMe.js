import React from "react";
import './ReachMe.css';

const ReachMe = (props) => {
    var {text, buttonLabel} = props;
    
    return(
        <>
            <div className="reachmeText">
                {text}
            </div>
            <a href="mailto:obinichi2002@gmail.com" id="reach">
                {buttonLabel}
            </a>
        </>
        
    )
}

export default ReachMe;