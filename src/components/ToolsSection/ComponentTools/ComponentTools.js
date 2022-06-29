import React from 'react';
import Tech from './Tech/Tech';
import './ComponentTools.css';
/* Needs an array of techs to function */

const ComponentTools = (props) => {
    var { techs } = props;
    return(
        <div id="techImmediateCon">
            {
                techs.map((item, key) => {
                    return <Tech key={key} label={ item } />
                })
            }    
        </div>
    )
}

export default ComponentTools