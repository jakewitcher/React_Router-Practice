import React, { Component } from 'react';

class AboutPage extends Component {
    state = {
        title: "About Me",
        content: "Pork belly corned beef landjaeger ribeye pork. Boudin bresaola tri-tip chuck, shankle venison drumstick pork belly jowl spare ribs picanha fatback. Bresaola corned beef sirloin, drumstick alcatra tongue sausage rump biltong. Andouille flank spare ribs sausage picanha bacon.",
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default AboutPage;