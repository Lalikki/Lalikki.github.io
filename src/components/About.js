import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faBriefcase, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about-wrapper">

            <div className="container">
                <h1>About me</h1>

                <div className="row">
                    <div className="col-md-4" >
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
                                <a href="/about" className="btn-main-offer">Download CV</a>
                            </div>

                        </div>




                    </div>

                    <div className="col-md-8" >

                    </div>

                </div>

            </div>
        </div>



    );
}

export default About;