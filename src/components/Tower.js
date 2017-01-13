import React, { PropTypes } from 'react';
import Apartment from './Apartment';

class Tower extends React.Component {
  render() {
    return (
      <div className="tower">
        <div className="watter-supply"></div>
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
        <Apartment isNight={this.props.isNight} />
      </div>
    )
  }
}

Tower.PropTypes = {
  isNight: PropTypes.bool
}

export default Tower;
