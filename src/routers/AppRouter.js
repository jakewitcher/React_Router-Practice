import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../containers/HomePage';
import AboutPage from '../containers/AboutPage';
import ContactPage from '../containers/ContactPage';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/about" component={AboutPage} exact={true} />
                        <Route path="/contact" component={ContactPage} exact={true} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppRouter;
