import React from 'react';
import Apartment from './Apartment';

export default class Tower extends React.Component {
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
