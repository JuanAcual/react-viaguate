import React, { Component } from 'react';
import CardFeature from '../Cards/CardFeature';
import Nav from '../Nav/Nav';
import { Fragment } from 'react';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Nav />
                <CardFeature />
            </Fragment>
        );
    }
}

export default App;
