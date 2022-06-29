import React from "react";
import PropType from 'prop-types';
import './Job.css';

const Job = (props) => {
    var {jobTitle, org, jobRoles} = props;
    var roles = ["dskk", "asimo"]
    return ( 
        <div className="jobClass">
            <h3 className="jobTitle">
                { jobTitle }
                <span> @ {org}</span>
            </h3>
            <div className="jobRoles quickAnimScroll fade">
                {
                    jobRoles.map((x, key)=> {
                        return (
                            <div className="job_role" key={key}>
                                <div className="lister">
                                </div>
                                <div className="roleProper">
                                    {x}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Job.propTypes = {
    roles : PropType.array /* roles is an array */
}
export default Job;