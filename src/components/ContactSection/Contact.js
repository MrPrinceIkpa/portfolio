import React from 'react';
import ReachMe from './ReachMe/ReachMe';
import './Contact.css';

class Contact extends React.Component {
    constructor () {
        super();
    }
    render () {
        var {text, buttonLabel} = this.props;
        return (
            <section id='contactSection' className='contactSection'>
                <h3>Get in touch</h3>
                <div id="reachCon">
                    <ReachMe text={text} buttonLabel={buttonLabel} />
                </div>
            </section>
        )
    }
}

export default Contact;