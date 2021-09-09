import React from 'react'

// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (


        <footer className="text-center text-lg-start bg-dark text-muted">

            {/* <section
                className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom"
            >

                <div className="icon-links">
                    <span><FontAwesomeIcon icon={faGithubSquare} size="3x" /></span>
                    <span><FontAwesomeIcon icon={faLinkedin} size="3x" /></span>
                </div>

                <div className="me-5 d-none d-lg-block">

                </div>

                <div>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    >
                        <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                    </a>
                </div>

            </section> */}



            <section className="footer-main">
                <div className="container text-center text-md-start">

                    <div className="row p-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">

                            <h6 className="text-uppercase fw-bold mb-2">
                                Socials
                            </h6>
                            <a href="https://github.com/Lalikki" className="social-link"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>

                            <p>

                                <a href="https://linkedin.com/in/lauri-jarvinen-33710" className="social-link"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">

                            <h6 className="text-uppercase fw-bold mb-2">
                                About me
                            </h6>
                            <p>
                                Just a regular guy who lives in Tampere and working as an ICT-Specialist.
                                My main focus is to learn Front End development.
                            </p>
                        </div>




                        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1">

                            <h6 className="text-uppercase fw-bold mb-2">
                                Some of my projects
                            </h6>
                            <p>
                                <a href="https://lalikki.github.io/FoxInTheBox/" className="project-link">Fox in the Box</a>
                            </p>
                            <p>
                                <a href="https://boiling-oasis-93205.herokuapp.com/" className="project-link">YelpCamp</a>
                            </p>

                        </div> */}

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

            {/* <div className="text-center">
                © 2021 Copyright: Portfolio App
            </div> */}
        </footer>


    )
}

export default Footer;


