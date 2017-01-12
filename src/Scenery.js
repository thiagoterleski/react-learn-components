import React from 'react';
import Tower from './Tower';

export default class Scenery extends React.Component {
  render() {
    return(
      <div className="scenery">
        <div className="container">
          <Tower />
        </div>
        <div className="ground"></div>
      </div>
    )
  }
}
