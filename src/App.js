import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyWidget extends Component {
  render() {
    console.log('ALEX--->7', 'App.js', ' render app');

    return (
      <div className="App">
        <header className="App-header">
          <p>I'm a React App hosted somewhere on Github !</p>
          <button onClick={this.onClick}> I'm A Widget!</button>
        </header>
      </div>
    );
  }

  onClick = () => {
    console.log('ALEX--->29', 'App.js', 'Click');

    alert('helllo widget');
  };
}

const container = document.querySelector('#widget');

//ReactDOM.render(<App />, container);
//export const myApp = ReactDOM.createPortal(<App />, container);
export const init = config => {
  console.log('ALEX--->40', 'App.js', 'init before render ', config);
  const container = document.querySelector(config.container);
  ReactDOM.render(<MyWidget config={config} />, container);
};
