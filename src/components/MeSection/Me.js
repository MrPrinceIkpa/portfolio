import React from 'react';
import './Me.css';

class Me extends React.Component {
    constructor () {
        super();
    }
    render () {
        var {imageurl, text} = this.props;
        return (
            <section id="meSectionContainer">
                <div id="meHContainer">
                    <h3>Briefly, Me</h3>
                </div>
                <div id="meSectionBody">
                    <div id="meBodyPp">
                        <div>
                            <img src={imageurl} alt="Amadi-ikpa Obinichi Prince" />
                        </div>
                    </div>
                    <div id="briefEpis" className="quickAnimScroll fade">
                        {text.map((item, key)=> <p key={key}>{item}</p>)}
                    </div>
                </div>
            </section>
        )
    }
}

export default Me;