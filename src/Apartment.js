import React from 'react';
import Window from './Window';

export default class Apartment extends React.Component {

  render() {
    return (
      <div className="apartment">
        <Window />
        <Window />
      </div>
    )
  }
}
