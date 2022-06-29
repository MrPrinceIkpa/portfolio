import React from 'react';
import HeroButton from './HeroButton/HeroButton';
import './Hero.css';
/* 
 This component needs the following props:
 headText, subText, buttonLabel, buttonIconUrl
*/
class Hero extends React.Component {
    constructor () {
        super();
    }
    render () {
        var {headGreet, headText, subText, buttonLabel, buttonIconUrl} = this.props;
        return (
            <section className='heroSec' >
                <div className='heroContainer'>
                <div className="heroItem">
                    <h1 id="topHeading">
                        {headGreet}
                        <p className='headText'>
                            {headText}
                        </p>
                    </h1>
                </div>
                <div className="heroItem" id="docSubText">
                    <h2>{subText}</h2>
                </div>
                <div className="heroItem" id="herobuttonCon">
                    <HeroButton label={buttonLabel} iconUrl={buttonIconUrl} />
                </div>
                </div>
            </section>
        )
    }
    componentDidMount() {
        var icon = document.querySelector("#iconContainer");
        var button =  document.querySelector("#heroButton");
        var buttonWidth = button.offsetWidth;

        icon.style.left= (buttonWidth - icon.offsetWidth)+ "px";
        
    }
}

export default Hero;