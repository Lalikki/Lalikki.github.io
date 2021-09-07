import React from 'react'
import Skillbar from 'react-skillbars';

const skills = [
    {
        type: "HTML", level: 80
    },
    {
        type: "CSS", level: 70
    },
    {
        type: "JavaScript", level: 65
    },
    {
        type: "React", level: 50
    },
    {
        type: "Vue", level: 35
    },
    {
        type: "VBScript", level: 50
    }
];

const Skills = () => {
    return (

        <div>
            <h4>Skills</h4>
            <Skillbar skills={skills} />
        </div>
    )
}

export default Skills;
