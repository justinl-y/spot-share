import { combineReducers } from 'redux';
import shareSpotsReducer from '../ui/containers/ShareSpot/reducer';
// TDDO add local reducers to root-reducer

// combined reducer
export default combineReducers({
  appData: combineReducers({
    // add local reducers here
    shareSpots: shareSpotsReducer,
  }),
});
