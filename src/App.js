import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'romcar'
    }
  }

  onChange(e) {
    let val = e.target.value;
    let name = e.target.name;

    this.setState({[name]: val});
  }

  onClick(i) {
    console.log(i, 'woo')
    let temp = this.state.username;
    temp = temp.slice(0,i).concat(temp.slice(i+1));
    this.setState({username: temp})
  }
  render() {
    const inputStyle = {
      "border" : "none",
      "width" : "30%",
      "textAlign": "center"
    }
    return (
      <div className="App">
        <h1>Test</h1>
        <input style={inputStyle} value={this.state.username.length}/>
        <Validation length={this.state.username.length}/>
        <UserInput
          username={this.state.username}
          onChange={this.onChange.bind(this)}/>
        <UserOutput click={this.onClick.bind(this)} username={this.state.username}/>
      </div>
    );
  }
}

export default App;
