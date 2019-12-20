'use-strict';

import React from 'react';
import {Helmet} from 'react-helmet';
import Navigation from './components/Navigation.js';
import Container from './components/Container.js';
import Footer from './components/Footer.js';

class App extends React.Component {

    render(){

        return (

            <div>
                <Navigation />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default App;

// The Instagram component in the PearlCharles directory will pull data from Instagram in the render method using Axios, needs implementation here
