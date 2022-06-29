import React from 'react';
import "./HeroButton.css";

const HeroButton = (props) => {
    var {label, iconUrl} = props;

    return (
       
            <a id="heroButtonAnchor" href='mailto:obinichi2002@gmail.com'>
                <div id='heroButton'>
                    <span id='heroLabel'>{label}</span>
                    <div id='iconContainer'>
                        <img className="buttonIcon" src={iconUrl}/>
                    </div>
                </div>
            </a>
    )
}

export default HeroButton;