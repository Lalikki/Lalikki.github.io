import React from 'react';

const Experience = () => {
    return (
        <div className="experience-wrapper">

            <div className="container">
                <h1>Experience</h1>

                <h4>Job Experience</h4>
                <div className="row">
                    <div className="col experience-content" >
                        <h6>ICT Local support</h6>
                        <p className="content-paragraph">Worked as ICT local support during 2018-2020</p>
                        <p className="content-paragraph">Company: Patria Oyj (Fujitsu Finland Oy)</p>
                        <p className="content-paragraph">Location: Hatanpään valtatie 30, Tampere</p>
                        <h6>Responsibilities</h6>
                        <p className="content-paragraph">ICT logistics, delivering new hardware to users, solving problems, installing and configuring computer hardware, software,
                            networks and printers</p>
                    </div>
                    <div className="col experience-content" >
                        <h6>ICT-Specialist</h6>
                        <p className="content-paragraph">Working now as an ICT-Specialist from spring 2020</p>
                        <p className="content-paragraph">Company: Patria Oyj (ICT Elmo Oy)</p>
                        <p className="content-paragraph">Location: Hatanpään valtatie 30, Tampere / Remote</p>
                        <h6>Responsibilities</h6>
                        <p className="content-paragraph">SCCM package maintenance, Software packaging and distributing (using VBScript), solving workstation problems and software installation problems,
                            Microsoft Power Platform development and monitoring</p>
                    </div>

                </div>

                <h4>Other</h4>
                <div className="row">
                    <div className="col experience-content">
                        <h6>Python basics course (3 credits)</h6>
                        <p className="content-paragraph">Metropolia University of Applied Sciences</p>
                        <p className="content-paragraph">Strings, numbers, variables, lists, functions, if...Else, loops, arrays </p>
                    </div>
                    <div className="col experience-content">
                        <h6>Web development bootcamp 2021 Udemy online course</h6>
                        <p className="content-paragraph">Total 45 hours of material and <a href="https://boiling-oasis-93205.herokuapp.com/" className="project-link">YelpCamp</a> project</p>
                        <p className="content-paragraph">JavaScript, Express, Node, EJS, MongoDB</p>
                    </div>
                    <div className="col experience-content">
                        <h6>Bachelor of Business Information Technology</h6>
                        <p className="content-paragraph">Häme University of Applied Sciences</p>
                        <p className="content-paragraph">210 credits and 3,5 years full time studying</p>
                        <p className="content-paragraph">Study time: 2014 - 2018</p>
                    </div>
                    <div className="col experience-content">
                        <h6>Hobby projects and school</h6>
                        <p className="content-paragraph">2D Unity game <a href="https://lalikki.github.io/FoxInTheBox/" className="project-link">Fox in the Box</a></p>
                        <p className="content-paragraph">Lots of small projects made in school using Java and C#</p>
                        <p className="content-paragraph">This portfolio app :)</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience;
