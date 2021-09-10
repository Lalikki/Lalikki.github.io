import React from 'react';
import { jobContent, otherContent } from '../utils/Content';
const foxInTheBoxLink = "https://lalikki.github.io/FoxInTheBox/";
const yelpCampLink = "https://boiling-oasis-93205.herokuapp.com/";

const Experience = () => {
    return (
        <div className="experience-wrapper">

            <div className="container">
                <h1>Experience</h1>

                {/* Job content */}
                <h4>Job Experience</h4>
                <div className="row">
                    {jobContent.map(({ title, description, responsibilities }, index) => (
                        <div className="col experience-content" >

                            <div className="inner">
                                <h6>{title}</h6>
                                <p className="content-paragraph">{description}</p>
                                <h6>Responsibilities</h6>
                                <p className="content-paragraph">{responsibilities}</p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Other content */}
                <h4>Other</h4>
                <div className="row">
                    {otherContent.map(({ title, description, details }, index) => (
                        <div className="col experience-content">
                            <div className="inner">
                                <h6>{title}</h6>
                                <p className="content-paragraph">{description}</p>
                                <p className="content-paragraph">{details}</p>
                            </div>
                        </div>
                    ))}

                    {/* Last block content */}
                    <div className="col experience-content">
                        <h6>Hobby projects</h6>
                        <p className="content-paragraph">2D Unity game <a href={foxInTheBoxLink} className="project-link">Fox in the Box</a></p>
                        <p className="content-paragraph">Bootcamp project <a href={yelpCampLink} className="project-link">YelpCamp</a></p>
                        <p className="content-paragraph">Lots of small projects made in school using Java and C#</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
