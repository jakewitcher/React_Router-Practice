import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Skill from '../components/Skill';
import SkillDetails from '../components/SkillDetails'

class AboutPage extends Component {
    state = {
        title: "About Me",
        content: "Pork belly corned beef landjaeger ribeye pork. Boudin bresaola tri-tip chuck, shankle venison drumstick pork belly jowl spare ribs picanha fatback. Bresaola corned beef sirloin, drumstick alcatra tongue sausage rump biltong. Andouille flank spare ribs sausage picanha bacon.",
        skills: [
            {
                name: "React",
                years: 2,
                id: 1,
                description: "Boudin bresaola tri-tip chuck, shankle venison drumstick.",
            }, {
                name: "Redux",
                years: 1,
                id: 2,
                description: "Pork belly corned beef landjaeger ribeye pork.",
            }, {
                name: "JavaScript",
                years: 3,
                id: 3,
                description: "Bresaola corned beef sirloin, drumstick alcatra tongue sausage rump biltong.",
            }

        ]
    }

    render() {
        const skills = this.state.skills;
        return (
            <Router>
                <div>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.content}</p>
                        {
                            this.state.skills.map((skill) => {
                                return (
                                    <Skill 
                                        key={skill.id}
                                        name={skill.name}
                                        match={this.props.match}
                                    />
                                )
                            })
                        }
                    <hr/>
                    <Route path={`${this.props.match.path}/:skillName`} render={props => <SkillDetails {...props} skills={skills}/>} />
                    
                </div>
            </Router>
        )
    }
}

export default AboutPage;