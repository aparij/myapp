import { MyWidget } from './App';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default {
  widgets: {
    myWidget: {
      render: args => {
        console.log('ALEX--->9', 'index.js', 'args--->', args);
        return <MyWidget />;
        //ReactDOM.render(<MyWidget />, args.selector);
      }
    }
  }
};
