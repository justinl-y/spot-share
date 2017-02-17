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
import App from '../../ui/containers/App';
import ApplicationMenu from '../../ui/components/ApplicationMenu';
import BookSpotList from '../../ui/containers/BookSpotList';
import BookSpotInput from '../../ui/containers/BookSpotInput';
import ShareSpotList from '../../ui/containers/ShareSpotList';
import ShareSpotInput from '../../ui/containers/ShareSpotInput';
import NotFound from '../../ui/components/NotFound';
import ShareSpaceContainer from '../../ui/containers/MapContainer';
import PostList from '../../ui/containers/ProcessLogin';

injectTapEventPlugin();

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <Route component={MainLayout}>
            <Route path="/" component={App}>
              <Route path="/login" component={PostList} />
              <IndexRoute component={ShareSpaceContainer} />
              <Route path="/menu" component={ApplicationMenu} />
              <Route path="/bookspot">
                <Route path="list" component={BookSpotList} />
                <Route path="new" component={BookSpotInput} />
                <Route path="edit" component={BookSpotInput} />
              </Route>
              <Route path="/sharespot">
                <Route path="list" component={ShareSpotList} />
                <Route path="new" component={ShareSpotInput} />
                <Route path="edit" component={ShareSpotInput} />
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
