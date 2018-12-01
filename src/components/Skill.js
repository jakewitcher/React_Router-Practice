import React from 'react';
import { Link } from 'react-router-dom';

const Skill = (props) => {
    return (
            <div>
                <Link to={`${props.match.url}/${props.name}`}>{props.name}</Link>
                <p>{props.years}</p>
            </div>
    );
}

export default Skill;