import { combineReducers } from 'redux';
// TDDO add local reducers to root-reducer
import applicationLocationReducer from '../ui/containers/App/reducer';
import shareSpotListReducer from '../ui/containers/ShareSpotList/reducer';
import shareSpotInputReducer from '../ui/containers/ShareSpotInput/reducer';

// combined reducer
export default combineReducers({
  appData: combineReducers({
    // TODO add local reducers here
    userLocation: applicationLocationReducer,
    shareSpotList: shareSpotListReducer,
    shareSpotInput: shareSpotInputReducer,
  }),
});
