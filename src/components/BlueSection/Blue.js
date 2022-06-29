import React from 'react';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import './Blue.css';

class Blue extends React.Component {
    constructor () {
        super();
    }
    render () {
        var {jobList, projectList} = this.props;
        return (
            <section id="blueSection">
               <Experience jobList={jobList} />
               <Projects projectList={projectList} />
            </section>
        )
    }
}

export default Blue;