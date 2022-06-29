import React from "react";
import './Representation.css';

const Representation = (props) => {
    var {text, imgUrl} = props;
    return (
        <div id="repContainer">
            <div id="repImgContainer">
                <img className="quickAnimScroll fade" src={imgUrl} />
            </div>
            <br />
            <div id="repTextContainer">
                {text}
            </div>
        </div>
    )
}

export default Representation