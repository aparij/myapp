import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from 'react-trello';
import data from './data.json';

class MyWidget extends Component {
  render() {
    console.log('ALEX--->7', 'App.js', ' render app');
    return (
      <div className="App">
        <header className="App-header">
          <p>I'm a React App hosted somewhere on Github !</p>
          <h1> {this.props.config.current_user.login}</h1>
          <button onClick={this.onClick}> I'm A Widget!</button>
        </header>
        <Board data={data} draggable />
      </div>
    );
  }

  onClick = () => {
    alert('helllo widget');
  };
}

//const container = document.querySelector('#widget');

//ReactDOM.render(<App />, container);
//export const myApp = ReactDOM.createPortal(<App />, container);
export const init = config => {
  const container = document.querySelector(config.container);
  ReactDOM.render(<MyWidget config={config} />, container);
};
