import React, { Component } from 'react';
import Apartment from './Apartment';

class Tower extends Component {
  render() {
    return (
      <div className="tower">
        <div className="watter-supply"></div>
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
      </div>
    )
  }
}

export default Tower;
