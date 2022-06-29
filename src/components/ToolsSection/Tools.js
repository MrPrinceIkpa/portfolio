import React from 'react';
import ComponentTools from './ComponentTools/ComponentTools';
import Representation from './Representation/Representation';
import Proptype from 'prop-types';
import './Tools.css';

class Tools extends React.Component {
    constructor () {
        super();
    }
    render () {
        var {text, imgUrl, techs} = this.props;
        return (
            <section id="toolSection">
                <h3 id="toolSectionH">My Tools</h3>
                <Representation text={text} imgUrl={imgUrl} />
                <ComponentTools techs={techs} />
            </section>
        )
    }
}

Tools.propTypes = {
    text : Proptype.string,
    imgUrl : Proptype.string,
    techs : Proptype.array
}

export default Tools;