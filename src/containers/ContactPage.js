import React, { Component } from 'react';

class ContactPage extends Component {
    state = {
        name: "Jake Witcher",
        email: "jakewitcher@gmail.com",
        phone: "(555)-651-1493",
        address: "12300 Main St. Findlay, OH 45243",
    }

    render() {
        return (
            <div>
                <h1>Contact Page</h1>
                <p>{this.state.name}</p>
                <p>{this.state.address}</p>
                <p>{this.state.phone}</p>
                <p>{this.state.email}</p>
            </div>
        )
    }
}

export default ContactPage;