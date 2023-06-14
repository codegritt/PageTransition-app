import React, { Component } from "react";

export default class Asd extends Component {
  componentWillUnmount() {
    console.log("will");
  }

  constructor(props) {
    super(props);
    console.log("cons");
  }

  componentDidMount() {
    console.log("did");
  }
  render() {
    let langs = ["Ruby", "ES6", "Scala"];
    return (
      <div>
        {langs.map((it) => (
          <p>it</p>
        ))}
      </div>
    );
  }
}
