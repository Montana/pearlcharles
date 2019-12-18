'use-strict';

import React from 'react';
import Instafeed from 'instafeed.js';

class Instagram extends React.Component {

    componentDidMount() {

        new Instafeed({
            get: 'user',
            userId: '7248375',
            accessToken: 'null',
            resolution: 'standard_resolution',
            limit: '4',
            template: '<a href="{{link}}"><img style="height:auto; width:50%;" src="{{image}}"></a>'
        }).run();
    }

        // this links to Pearl Charles instagram, and is formatted

    
    render() {

        return (
            <div id="instafeed"></div>
        );
    }
}

export default Instagram; 
