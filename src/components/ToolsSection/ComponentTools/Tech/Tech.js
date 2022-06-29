import React from "react";
import './Tech.css';
/* Needs a label property to funtion */

const Tech = (props) => {
    var {label} = props;
    return (
        <div className="techProper techButton quickAnimScroll fade">
            {label}
        </div>
    )
}

export default Tech;