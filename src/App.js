import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from 'react-trello';
//import data from './data.json';

class MyWidget extends Component {
  render() {
    let data = {
      lanes: [
        {
          id: 'PLANNED',
          title: 'Planned Projects',
          label: '20/70',
          style: {
            width: 280
          },
          cards: []
        },
        {
          id: 'WIP',
          title: 'Work In Progress',
          label: '10/20',
          style: {
            width: 280
          },
          cards: []
        }
      ]
    };
    console.log('ALEX--->7', 'App.js', ' render app', this.props.config);

    this.props.config.projects.map((project, index) => {
      if (index % 2 == 0) {
        data.lanes[0].cards.push({
          id: project.id,
          title: project.name,
          label: project.name + project.type,
          description: project.uuid
        });
      } else {
        data.lanes[1].cards.push({
          id: project.id,
          title: project.name,
          label: project.name + project.type,
          description: project.uuid
        });
      }
    });
    return (
      <div className="App">
        <header className="App-header">
          <p>I'm a React App hosted somewhere on Github !</p>
          <h1> Welcome {this.props.config.current_user.login} ! </h1>
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
