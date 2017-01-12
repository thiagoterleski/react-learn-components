import React, {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Image from '../day-and-night.png';

class ButtonTogglePeriod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.switchButton)
      .addEventListener('transitionend', this.props.onTransitionEnd, false);
  }

  onChange() {
    this.setState({
      active: !this.state.active
    },this.props.onChangeEvent())
  }
  render() {
    const { active } = this.state;
    const pos = (active) ? "active" : "";
    return (
      <button
        ref="switchButton"
        onClick={this.onChange.bind(this)}
        className={ "toggle-button floating " + pos }>
        <img src={Image} alt="Toggle day/night" width="32" height="32" />
      </button>
    )
  }
}

ButtonTogglePeriod.propTypes = {
  onChangeEvent: PropTypes.func,
  onTransitionEnd: PropTypes.func,
}

export default ButtonTogglePeriod;
