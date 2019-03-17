import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: "E.Gore",
      title: "React-Todo"
    };
  }

  render() {
    return (
      <header>
        <h4> {this.state.logo}</h4>
        <h4>{this.state.title}</h4>
        <h4>&nbsp;</h4>
      </header>
    );
  }
}

export default Header;
