import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis voluptatum velit, architecto alias exercitationem sunt
                laudantium sint. Illo nisi quisquam soluta numquam, asperiores
                ullam. Sit perspiciatis ipsam esse impedit sequi!
              </p>
              <button style={btn} onClick={this.props.jing}>
                Click here khintil
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Component2;

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};
