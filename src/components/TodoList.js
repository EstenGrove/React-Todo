import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <Todo todo={item.text} key={item.key} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
