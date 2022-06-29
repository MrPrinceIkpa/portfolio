import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import './MobileNav.css';

class MobileNav extends React.Component {
    constructor () {
        super();
        this.navSwitch = 1;
        this. renderCount = null;
        this.displayNav = this.displayNav.bind(this);
        this.hideNav = this.hideNav.bind(this);
        this.handleNav = this.handleNav.bind(this);
    }
    componentDidMount() {
        this.allocateNavEvents("mobileNavChild");
        var burger = document.querySelector("#burgerButton");
        var close = document.querySelector('#closeButton');

        burger.addEventListener("click", this.handleNav)
        close.addEventListener("click", this.handleNav)
    }
    hideNav () {
        //animation goes here
        let burger = document.querySelector("#burgerButton2");
        let mobileNavContainer = document.querySelector("#mobileNavContainer");
        let burgerContainer = document.querySelector("#burgerButton");
        let navText = document.querySelector("#mobileNavListContainer");
        let navTextOpacity = 1;

        burgerContainer.style.display = "block";
        burgerContainer.style.height = burgerContainer.style.width = "auto"
        burger.style.opacity = 1;

        var disPointer = setInterval(function () {
            if(navTextOpacity > 0) {
                navTextOpacity -= 0.1;
                navText.style.opacity = navTextOpacity;
            }
            else {
                mobileNavContainer.style.display = 'none';
                navText.style.opacity = 1;
                document.body.scrollY = "hidden";
                clearInterval(disPointer);
            }
        }, 40)
    }
    displayNav () {
        //animation Goes here
        let burger = document.querySelector("#burgerButton2");
        let burgerOpacity = getComputedStyle(burger).opacity;
        let burgerContainer = document.querySelector("#burgerButton");
        let burgerContainerH = parseInt(getComputedStyle(burgerContainer).height, 10);
        let viewHeight = window.innerWidth;
        let mobileNavContainer = document.querySelector("#mobileNavContainer");

        //disappear text:
        var disPointer = setInterval(function () {
            if(burgerOpacity > 0) {
                burgerOpacity -= 0.1;
                burger.style.opacity = burgerOpacity;
            }
            else {
                clearInterval(disPointer);
            }
        }, 30);

        setTimeout(function () {
            var exPointer = setInterval(function () {
                if (burgerContainerH < (viewHeight * 2.4)) {
                    burgerContainerH += (10/100) * viewHeight;
                    burgerContainer.style.width = burgerContainer.style.height =`${burgerContainerH}px`;
                }
                else {
                    burgerContainer.style.width = burgerContainer.style.height = `${viewHeight * 2.4}px`;
                    mobileNavContainer.style.display = "block";
                    burgerContainer.style.display = "none";
                    document.body.scrollY = "hidden";
                    clearInterval(exPointer);
                }
            }, 25)
        }, 400)
    }
    handleNav() {
        if (this.navSwitch == true) {
            this.displayNav();
        }
        else {
            this.hideNav();
        }
        this.navSwitch = !this.navSwitch;
    }
    allocateNavEvents(className) {
        var self = this;
        Object.values(document.getElementsByClassName(className)).forEach( 
            (el) => el.addEventListener("click", function() {
                self.handleNav();
                let targetSection = this.getAttribute("targetsectionid")
                document.querySelector(`#${targetSection}`).scrollIntoView(true, {behavior: "auto"})
            })
        )
    }
    render() {
        var {pages} = this.props;
        return (
            <div id="mobileNavSection">
                <div id="burgerButton">
                    <div id="burgerButton2">
                        Menu
                    </div>
                </div>
                <div className="mobileNavContainer" id="mobileNavContainer">
                    <ul id="mobileNavListContainer">
                        {Object.keys(pages).map(function (page, key) {
                            if(page == "Resume") {
                                return <li className="mobileNavChild" key={key}><a href={pages[page]} id="resumeMobile">{page}</a></li>
                            }
                            else {
                                return <li className="mobileNavChild" targetsectionid={pages[page]} key={key}>{page}</li>
                            }
                        }
                        )}
                        <img id="closeButton" className="closeButton" src={process.env.PUBLIC_URL + "img/closeButton.svg"} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default MobileNav;