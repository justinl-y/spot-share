import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
import store from '../../redux/store';

import muiTheme from '../../ui/stylesheets/mui-theme';
import '../../ui/stylesheets/index.css';

import MainLayout from '../../ui/layouts/MainLayout';
import Welcome from '../../ui/components/Welcome';
import App from '../../ui/containers/App';

import ShareSpotList from '../../ui/containers/ShareSpotList';
// import ShareSpotAdd from '../../ui/components/ShareSpotAdd';

import ShareSpotInput from '../../ui/containers/ShareSpotInput';

import NotFound from '../../ui/components/NotFound';
import SignUp from '../../ui/containers/SignUp/signUp';

injectTapEventPlugin();

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <Route component={MainLayout}>
            <Route path="/" component={App}>
              <Route path="/signup" component={SignUp} />
              <IndexRoute component={Welcome} />
              <Route path="/sharespots">
                <Route path="list" component={ShareSpotList} />
                <Route path="new" component={ShareSpotInput} />
              </Route>
            </Route>
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
});
