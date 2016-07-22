import React from 'react';

require('./helloComponent.less');

export default class Hello extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}