import React, { Component } from "react";
import NewStudent from "./NewStudent";

class Student extends Component {
  render() {
    //return <p>it is from the student class</p>;
    {
      return (
        <div>
          <span>This span is in studet class</span>
          <NewStudent data="Child component data" />
        </div>
      );
    }
  }
}
export default Student;
