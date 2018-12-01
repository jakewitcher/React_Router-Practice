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
            }, {
                name: "Redux",
                years: 1,
                id: 2,
            }, {
                name: "JavaScript",
                years: 3,
                id: 3,
            }

        ]
    }

    render() {
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
                                        years={skill.years}
                                        match={this.props.match}
                                    />
                                )
                            })
                        }
                    
                        <Route path={`${this.props.match.path}/:skillId`} component={SkillDetails} />
                    
                </div>
            </Router>
        )
    }
}

export default AboutPage;