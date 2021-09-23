import React, { Component } from "react";

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: "this is myData in Props",
    };
  }

  changeMyData = () => {
    this.setState({ myData: "newData" });
  };

  render() {
    return (
      <div>
        <p>My prop is: {this.props.data}</p>
        <p>My state value is: {this.state.myData}</p>
        <button onClick={this.changeMyData}>Click me</button>
      </div>
    );
  }
}
export default NewStudent;
