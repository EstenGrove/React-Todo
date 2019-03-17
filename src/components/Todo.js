import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <ul>
        <li>{Todo.text}</li>
      </ul>
    );
  }
}

export default Todo;
