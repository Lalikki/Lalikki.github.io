import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faBriefcase, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import Skills from "./Skills";

const About = () => {
    return (
        <div className="about-wrapper">

            <div className="container">
                <h1>About me</h1>

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
                                <a href="/about" className="btn-main-offer">Download CV</a>
                            </div>

                        </div>

                    </div>


                    <div className="col-sm-8 about-content" >
                        <h4>My story</h4>

                        <p className="content-paragraph">Hi! My name is Lauri, I'm 26 years old and living in Tampere.
                            I worked as a chef 4 years and I started my IT-career in 2018 after Bachelor's Degree in Business Information Technology.
                            After school I worked in ICT-local support for about 2 years. Currently I'm working as an ICT-Specialist, mostly remotely.
                        </p>

                        <p className="content-paragraph">Never worked as a programmer but coding has been my hobby over 4 years now.
                            My interests are in Front End development and working hard every day to be a real programmer someday.
                        </p>

                        <p className="content-paragraph">I have a home office dog named Luca and he likes his job.
                            My favourite color is orange, as you can see.
                            I enjoy good food, playing video games, coding and learning new things.
                        </p>


                        <Skills />

                    </div>
                </div>



            </div>

        </div>




    );
}

export default About;