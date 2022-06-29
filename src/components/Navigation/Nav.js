import React from 'react';
import PropType from 'prop-types';
import MobileNav from './MobileNav/MobileNav';
import DesktopNav from './DesktopNav/DesktopNav';
import './Navigation.css';


/*
    Nav component requires 2 properties to be parsed to it- device and pages
    pages --- is an array of the pages that want to be displayed
    device ---- is a string that should either be "mobile" or "desktop" 
*/

class Nav extends React.Component {
    constructor () {
        super();
        this.allocateNavEvents = this.allocateNavEvents.bind(this);
    }
    componentDidMount() {
        this.allocateNavEvents("navChild");
    }
    allocateNavEvents(className) {
        Object.values(document.getElementsByClassName(className)).forEach( 
            (el) => el.addEventListener("click", function() {
                //alert(this);
                let targetSection = this.getAttribute("targetsectionid")
                document.querySelector(`#${targetSection}`).scrollIntoView(true, {behavior: "auto"})
            })
        )
    }
    render () {
        return (
            <>
                <div id="globalDesktopNav">
                    <DesktopNav pages={this.props.pages} />
                </div>
                <div id="globalMobileNav">
                    <MobileNav pages={this.props.pages} />
                </div>
            </>
        )
    }
}
export default Nav;