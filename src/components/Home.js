import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";


const Header = () => {
    return (

        <div className="header-wrapper">
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }

                }
                }
            />
            {/* Upper main-info */}
            <div className="main-info">
                <h1>Lauri Järvinen</h1>
                <h3>ICT-Specialist</h3>

                {/* <Link to="/about" className="btn-main-offer">Let's go!</Link> */}
            </div>

            {/* Lower main-info */}
            <div className="main-info-lower">
                <h2>My techstack</h2>
                <Typed
                    className="typed-text"
                    strings={["HTML", "CSS", "JavaScript", "React", "Vue", "VBScript"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/about" className="btn-main-offer">Download CV</a>
            </div>

        </div>

    )
}

export default Header


