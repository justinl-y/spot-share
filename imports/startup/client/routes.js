import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; // 

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../ui/stylesheets/mui-theme';
import '../../ui/stylesheets/index.css';

import MainLayout from '../../ui/layouts/MainLayout';
import Welcome from '../../ui/components/Welcome';
import App from '../../ui/containers/App';
import NotFound from '../../ui/components/NotFound';

injectTapEventPlugin();

Meteor.startup(() => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
          </Route>
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>,
    document.getElementById('root'),
  );
});
