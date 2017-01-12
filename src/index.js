import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Scenery from './Scenery';

const App = React.createClass({
  render() {
    return (
      <Scenery/>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
