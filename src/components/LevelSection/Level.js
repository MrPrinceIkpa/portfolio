import React from 'react';
import "./Level.css";

/* Needs an array of skills as a property */
class Level extends React.Component {
    constructor () {
        super();
    }
    render () {
        var {skills} = this.props;
        return (
            <section id="levelSection">
                <h3 id="levelHeader">How Much?</h3>
                <div id="levelContentContainer">
                    <div id="skillContainer" className="quickAnimScroll fade">
                        {
                            skills.map((skill, key) =>
                                <div key={key} className="skill">{skill}</div>
                            )
                        }
                    </div>
                    <h3 id='ratio'>3:1</h3>
                </div>
            </section>
        )
    }
}

export default Level;