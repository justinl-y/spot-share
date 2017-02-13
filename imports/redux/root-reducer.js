import { combineReducers } from 'redux';
import applicationLocationReducer from '../ui/containers/App/reducer';
import shareSpotReducer from '../ui/containers/ShareSpotList/reducer';
// TDDO add local reducers to root-reducer

// combined reducer
export default combineReducers({
  appData: combineReducers({
    // add local reducers here
    userLocation: applicationLocationReducer,
    shareSpots: shareSpotReducer,
  }),
});
