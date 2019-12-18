"use-strict";

// using 'use-strict' in this case on Pearl Charles project via I want warnings about deprecated findDOMNode usage (via Montana Mendy, MDN) 

import React from "react";
import { Jumbotron } from "react-bootstrap";
import ScrollLite from "./ScrollLite.jsx";

const heroObj = {
  title: "Pearl Charles",
  subtitle: "Whatever she wants"
};

const styles = {
  hero: {
    color: "white",
    borderRadius: "0",
    textAlign: "center",
    background: "transparent",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    maxWidth: "50vw"
  },
  scroll: {
    position: "relative",
    top: "15vh"
  }
};

class Hero extends React.Component {
  render() {
    return (
      <Jumbotron style={styles.hero} id="top">
        <div>
          <h1 style={styles.h1}>{heroObj.title}</h1>
          <h3 style={styles.h3}>{heroObj.subtitle}</h3>
          <ScrollLite
            style={styles.scroll}
            id="about"
            speed={5}
            className="fa fa-arrow-down fa-2x bounce"
          ></ScrollLite>
        </div>
      </Jumbotron>
    );
  }
}

export default Hero;
