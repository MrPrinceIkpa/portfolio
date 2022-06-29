import React from "react";
import Project from "./Project/Project";
import './Projects.css';

/* projectList in an array of objects
    Each object has 2 props: imgurl, text
*/
const Projects = (props) => {
    var {projectList} = props;
    return (
        <section id="projectsSection">
            <h3>Projects?</h3>
            <div>
                {
                    projectList.map((x, i) => {
                        return(
                            <Project key={i} imageurl={x.imgurl} text={x.text} />
                        )
                        
                    })
                }
            </div>
            <p><a href={`${process.env.PUBLIC_URL}/docs/obinichi.pdf`}>download resume</a></p>
        </section>
    )
}
export default Projects;