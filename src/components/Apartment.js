import React, { Component } from 'react';
import Window from './Window';

class Apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWindowsClosed: false,
    }
  }
  changeWindowsState() {
    this.setState({
      isWindowsClosed: !this.state.isWindowsClosed
    });
  }


  render() {
    return (
      <div className="apartment" onClick={this.changeWindowsState.bind(this)}>
        <Window closed={ this.state.isWindowsClosed } />
        <Window closed={ this.state.isWindowsClosed } />
      </div>
    )
  }
}

export default Apartment;
