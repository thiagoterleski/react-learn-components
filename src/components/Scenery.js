import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';

class Scenery extends Component {
  render() {
    const sceneryClass = (this.props.isNight) ? "scenery is-night" : "scenery";
    return(
      <div className={sceneryClass}>
        <div className="container">
          <ButtonTogglePeriod />
          <Tower isNight={ this.props.isNight } />
        </div>
        <div className="ground"></div>
      </div>
    )
  }
}
Scenery.propTypes = {
  isNight: PropTypes.bool.isRequired,
};

export const mapStateToProps = ({ app }) => {
  const { isNight } = app;
  return { isNight };
};

export default connect(mapStateToProps)(Scenery);
