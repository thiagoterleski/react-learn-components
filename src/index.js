import React from 'react';
import ReactDOM from 'react-dom';
import Reactotron from 'reactotron-react-js';
import { Provider } from 'react-redux';
import createStore from './store/createStore';

import './ReactotronConfig';
import './index.css';
import Scenery from './components/Scenery';

const store = Reactotron.createStore();

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <Scenery/>
      </Provider>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);