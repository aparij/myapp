import { App } from './App';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default {
  widgets: {
    myWidget: {
      render: args => {
        ReactDOM.render(<App />, args.selector);
      }
    }
  }
};
