import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Image from '../day-and-night.png';

import { toogleDayNight } from '../actions/AppActions';

class ButtonTogglePeriod extends Component {
  
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.switchButton)
      .addEventListener('transitionend', this.props.onTransitionEnd, false);
  }

  render() {
    const pos = (this.props.isNight) ? "active" : "";
    return (
      <button
        ref="switchButton"
        onClick={this.props.toogleDayNight}
        className={ "toggle-button floating " + pos }>
        <img src={Image} alt="Toggle day/night" width="32" height="32" />
      </button>
    )
  }
}
ButtonTogglePeriod.propTypes = {
  isNight: PropTypes.bool.isRequired,
  onTransitionEnd: PropTypes.func,
}

export const mapStateToProps = ({ app }) => {
  const { isNight } = app;
  return { isNight };
}

export default connect(mapStateToProps, { toogleDayNight })(ButtonTogglePeriod);
