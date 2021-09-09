import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faBriefcase, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import Skills from "./Skills";
import CV from '../CV_Jarvinen_Lauri.pdf';
import { aboutContent } from '../utils/Content'

const About = () => {
    return (
        <div className="about-wrapper">

            <div className="container">
                <h1>About me</h1>

                {/* Card content */}
                <div className="row">
                    <div className="col-sm-4 about-content" >
                        <div id="mycard" className="card d-flex">
                            <img src="https://mdbootstrap.com/img/new/standard/city/062.jpg" alt="" className="card-img-top" />

                            <div className="card-body d-flex justify-content-center">
                                <h5 className="card-title">Lauri Järvinen</h5>

                            </div>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><p><FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon> 15.09.1995</p></li>
                                <li className="list-group-item"><p><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon> ICT-Specialist</p></li>
                                <li className="list-group-item"><p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> laurijarvinen@hotmail.com</p> </li>
                                <li className="list-group-item"><p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +358405346405</p></li>
                            </ul>
                            <div className="card-body d-flex justify-content-center">
                                <a href={CV} download className="btn-main-offer">Download CV</a>
                            </div>

                        </div>

                    </div>

                    {/* Other content and skills bar */}
                    <div className="col-sm-8 about-content" >
                        <h4>My story</h4>
                        {aboutContent.map(({ paragraph }, index) => (

                            <p className="content-paragraph">{paragraph}</p>

                        ))}

                        <Skills />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default About;