import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    if (this.state.clicks > 0)
      this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    return (
      <div className="btn-toolbar">
        {this.state.show ? <b>{this.state.clicks}&nbsp;</b> : ""}
        <button onClick={this.IncrementItem} className="btn btn-outline-success btn-sm">
          +
        </button>
        <button onClick={this.DecreaseItem} className="btn btn-outline-danger btn-sm">
          -
        </button>
      </div>
    );
  }
}

