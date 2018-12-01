import React from 'react';
import { Link } from 'react-router-dom';

const Skill = (props) => {
    return (
            <div>
                <Link to={`${props.match.url}/${props.name}`}>{props.name}</Link>
            </div>
    );
}

export default Skill;