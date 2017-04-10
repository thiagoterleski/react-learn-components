import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Window = (props) => {
  let classState = "window";
  if(props.closed)
    classState += " closed";

  if(props.isNight)
    classState += " light-on"

  return <div className={ classState }></div>
}
Window.propTypes = {
  closed: PropTypes.bool,
  isNight: PropTypes.bool.isRequired,
}

export const mapStateToProps = ({ app }) => {
  const { isNight } = app;
  return { isNight };
}

export default connect(mapStateToProps)(Window);
