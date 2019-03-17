import React from "react";
import Todo from "./Todo";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {
        text: "",
        key: null
      },
      index: 0,
      list: []
    };
    this.handleEnter = this.handleEnter.bind(this);
  }
  // Press enter to create todo
  handleEnter(event) {
    event.preventDefault();

    if (event.keyCode === 13) {
      this.setState({
        todo: {
          text: event.target.value,
          key: this.state.index
        },
        index: 1,
        list: []
      });
    }
    console.log(event.keyCode, event.target.value);
  }
  createTodo(event) {
    return <Todo>{event.target.value}</Todo>;
  }

  render() {
    return (
      <div className="TodoInput">
        <input
          type="text"
          placeholder="Run unit tests..."
          onKeyUpCapture={this.handleEnter}
        />
        <button>Add</button>
      </div>
    );
  }
}

export default TodoInput;
