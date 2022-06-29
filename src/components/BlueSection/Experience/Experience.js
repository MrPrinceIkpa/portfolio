import React from "react";
import Job from "./Job/Job";
import './Experience.css';

/* jobList is an array of objects. Each object has jobTitle,
    jobRoles(an array), org= name of organisation.
*/

const Experience = (props) => {
    var {jobList}  = props;
    return (
        <section id="experienceSection">
            <h3>Experience?</h3>
            <div id="jobsContainer">
                {
                    jobList.map((x, key) => {
                        return (
                            <Job key={key} jobTitle={x.jobTitle} jobRoles={x.jobRoles} org={x.org} />
                        )
                    })
                }
            </div>
            <a href={`${process.env.PUBLIC_URL}/docs/obinichi.pdf`}>download resume</a>
        </section>
    )
}
export default Experience;