import React from 'react';

const SkillDetails = (props) => {
    const { match, skills } = props;
    const skill = skills.filter(skill => skill.name === match.params.skillName)[0];
    console.log(skill);
    return (
        <div>
            <h1>Skill Details Page</h1>
            <p>{skill.name}</p>
            <p>{skill.description}</p>
        </div>
    )
}

export default SkillDetails;