import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    console.log('ALEX--->7', 'App.js', ' render app');

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onClick} />
        </header>
      </div>
    );
  }

  onClick = () => {
    alert('helllo');
  };
}

const container = document.querySelector('#widget');

//ReactDOM.render(<App />, container);
ReactDOM.createPortal(<App />, container);
// export const init = config => {
//   ReactDOM.render(<App config={config} />, container);
// };
