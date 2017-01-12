import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.switchButton)
      .addEventListener('transitionend', this.props.onChangeEvent, false);
  }

  onChange() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { active } = this.state;
    const pos = (active) ? "right" : "left";
    return (
      <button
        ref="switchButton"
        onClick={this.onChange.bind(this)}
        className={ "switch-button floating " + pos }>
        <span className="switch"></span>
      </button>
    )
  }
}

SwitchButton.propTypes = {
  onChangeEvent: PropTypes.func
}

export default SwitchButton;
