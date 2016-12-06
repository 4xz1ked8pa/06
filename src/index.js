import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import './assets/css/reset.css';
import './assets/css/settings.css';
import './assets/css/frame.css';
import './assets/css/fonts.css';

import Home from './pages/Home/Home';
import Hire from './pages/Hire/Hire';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/hire' component={Hire} />
    </Route>
  </Router>,
  document.getElementById('root')
);
