import React from 'react';
import './DesktopNav.css';

const DesktopNav = (props) => {
    var {pages} = props; //pages is an array of the nav contents
    return (
        <ul className="navContainer">
            {Object.keys(pages).map(function (page, key) {
                if(page == "Resume") {
                    return <li className="navChild" key={key}><a href={props.pages[page]}>{page}</a></li>
                }
                else {
                    return <li className="navChild" targetsectionid={props.pages[page]} key={key}>{page}</li>
                }
            }
            )}
        </ul>
    )
}
export default DesktopNav;