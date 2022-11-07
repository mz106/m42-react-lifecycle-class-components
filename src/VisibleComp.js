import React from "react";

class VisibleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { text: "no text" };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitTextChange = this.submitTextChange.bind(this);
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  submitTextChange = (e) => {
    e.preventDefault();
    this.setState({ text: this.state.value });
    this.setState({ value: "no text" });
  };

  componentDidMount() {
    console.log("visiblecomp componentDidMount");
  }

  componentDidUpdate() {
    console.log("visiblecomp componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("visiblecomp componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>Is Visible</h1>
        <p>{this.state.text}</p>
        <form>
          <input
            placeholder="add new text here"
            value={this.state.value}
            onChange={this.changeHandler}
            type="text"
          />
          <button onClick={this.submitTextChange}>Change Text</button>
        </form>
      </div>
    );
  }
}

export default VisibleComp;
