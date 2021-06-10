import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      messages: "",
      alert: ""
    };
  }

  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  onClick = (e) => {
    const { inputValue } = this.state;
    const newMes = inputValue;
    if (inputValue !== "") {
      this.setState({
        messages: newMes,
        inputValue: ""
      });
    } else {
      this.alertFunction();
    }
  };
  alertFunction = () => {
    this.setState({ alert: "Please Enter Text" });
    setTimeout(this.deleteAlert, 2p000);
  };

  deleteAlert = () => {
    this.setState({ alert: null });
  };

  render() {
    const { inputValue, messages, alert } = this.state;
    console.log("input", inputValue);
    const mesger =
      messages !== "" ? <div className="mes">{messages}</div> : null;

    return (
      <div className="App">
        <h4>A message You Would Like To Pass</h4>
        <input value={inputValue} type="text" onChange={this.onChange} />
        <div className="btn">
          <button onClick={this.onClick}>Submit</button>
        </div>
        <div className="alert">
          <h2>{alert}</h2>
        </div>
        <h4> Last Message Delevered</h4>
        <h2>{mesger}</h2>
      </div>
    );
  }
}

export default App;
