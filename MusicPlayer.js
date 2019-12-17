'use-strict';

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Helmet} from "react-helmet";

const PearlCharles = {
    sunshinewine: 'https://bandcamp.com/EmbeddedPlayer/track=1634865135/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true'
    sleeplessdreamer: 'https://bandcamp.com/EmbeddedPlayer/album=2591201378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true'
};

const style = {
    border: '0',
    width: '100%',
    height: '700px'
};

export default class MusicPlayer extends React.Component {

    render() {

        return (

            <Grid id='music'>
                <Row>
                    <Col xs={12} sm={12}>
                        <h1>Albums/EP's</h1>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Sweet Sunshine Wine <i>-Released May 3, 2019</i></h3>
                        <iframe style={style} src={PearlCharles.sunshinewine} seamless>
                            <a href='https://pearlcharlesmusic.bandcamp.com/'>Sweet Sunshine Wine</a>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Sleepless Dreamer <i>- Released Februrary 2, 2018</i></h3>
                        <iframe style={style} src={PearlCharles.sleeplessdreamer} seamless>
                            <a href='https://pearlcharlesmusic.bandcamp.com/album/sleepless-dreamer/'>Sleepless Dreamer</a>
                        </iframe>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
