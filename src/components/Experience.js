import React from 'react';
import { jobContent, otherContent } from '../utils/Content';
const foxInTheBoxLink = "https://lalikki.github.io/FoxInTheBox/";
const yelpCampLink = "https://boiling-oasis-93205.herokuapp.com/";

const Experience = () => {
    return (
        <div className="experience-wrapper">

            <div className="container">
                <h1>Experience</h1>

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
                {/* <h6>ICT Local support</h6> */}

                {/* <h6>Responsibilities</h6>
                        <p className="content-paragraph">ICT logistics, delivering new hardware to users, solving problems, installing and configuring computer hardware, software,
                            networks and printers</p> */}
                {/* <div className="col experience-content" >
                    <h6>ICT-Specialist</h6>
                    <p className="content-paragraph">Working now as an ICT-Specialist from spring 2020</p>
                    <p className="content-paragraph">Company: Patria Oyj (ICT Elmo Oy)</p>
                    <p className="content-paragraph">Location: Hatanpään valtatie 30, Tampere / Remote</p>
                    <h6>Responsibilities</h6>
                    <p className="content-paragraph">SCCM package maintenance, Software packaging and distributing (using VBScript), solving workstation problems and software installation problems,
                        Microsoft Power Platform development and monitoring</p>
                </div> */}


                {/* Show content */}
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

                    {/* Show last block content */}
                    <div className="col experience-content">
                        <h6>Hobby projects</h6>
                        <p className="content-paragraph">2D Unity game <a href={foxInTheBoxLink} className="project-link">Fox in the Box</a></p>
                        <p className="content-paragraph">Bootcamp project <a href={yelpCampLink} className="project-link">YelpCamp</a></p>
                        <p className="content-paragraph">Lots of small projects made in school using Java and C#</p>
                    </div>
                    {/* <div className="col experience-content">
                        <h6>Python basics course (3 credits)</h6>
                        <p className="content-paragraph">Metropolia University of Applied Sciences</p>
                        <p className="content-paragraph">Strings, numbers, variables, lists, functions, if...Else, loops, arrays </p>
                    </div> */}
                    {/* <div className="col experience-content">
                        <h6>Web development bootcamp 2021 Udemy online course</h6>
                        <p className="content-paragraph">Total 63 hours of material</p>
                        <p className="content-paragraph">JavaScript, Express, Node, EJS, MongoDB</p>
                    </div> */}
                    {/* <div className="col experience-content">
                        <h6>Bachelor's degree in Business Information Technology</h6>
                        <p className="content-paragraph">Häme University of Applied Sciences</p>
                        <p className="content-paragraph">210 credits and 3,5 years full time studying</p>
                        <p className="content-paragraph">Study time: 2014 - 2018</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Experience;
