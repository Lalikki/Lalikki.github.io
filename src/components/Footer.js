import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const githubLink = "https://github.com/Lalikki";
const linkedInLink = "https://linkedin.com/in/lauri-jarvinen-33710";

const Footer = () => {
    return (


        <footer className="text-center text-lg-start bg-dark text-muted">

            <section className="footer-main">
                <div className="container text-center text-md-start">
                    <div className="row p-3">

                        {/* Socials */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Socials
                            </h6>
                            <a href={githubLink} className="social-link"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
                            <p>
                                <a href={linkedInLink} className="social-link"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                            </p>
                        </div>

                        {/* About me */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">

                            <h6 className="text-uppercase fw-bold mb-2">
                                About me
                            </h6>
                            <p>
                                Just a regular guy who lives in Tampere and working as an ICT-Specialist.
                                My main focus is to learn Front End development.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Contact
                            </h6>
                            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> laurijarvinen@hotmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +358405346405</p>
                        </div>

                    </div>
                </div>
            </section>
        </footer>


    )
}

export default Footer;


