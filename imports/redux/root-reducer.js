import { combineReducers } from 'redux';
import applicationLocationReducer from '../ui/containers/App/reducer';
import shareSpotsReducer from '../ui/containers/ShareSpot/reducer';
// TDDO add local reducers to root-reducer

// combined reducer
export default combineReducers({
  appData: combineReducers({
    // add local reducers here
    userLocation: applicationLocationReducer,
    shareSpots: shareSpotsReducer,
  }),
});
