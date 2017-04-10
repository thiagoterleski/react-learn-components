import React, { PropTypes } from 'react';
import Window from './Window';

class Apartment extends React.Component {
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
        <Window closed={ this.state.isWindowsClosed } lightOn={ this.props.isNight } />
        <Window closed={ this.state.isWindowsClosed } lightOn={ this.props.isNight } />
      </div>
    )
  }
}

Apartment.propTypes = {
  isNight: PropTypes.bool
}

export default Apartment;
