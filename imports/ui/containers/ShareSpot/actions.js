// action types
/* export const LOADING_POSTS_BEGIN = 'LOADING_POSTS_BEGIN';
export const LOADING_POSTS_END = 'LOADING_POSTS_END';
export const UPDATE_POSTS = 'UPDATE_POSTS';*/

export const EDIT_PARKING_SPOT = 'EDIT_PARKING_SPOT';

// action creators
/* const loadResource = () => ({
  type: LOADING_POSTS_BEGIN,
  payload: null,
});

const doneLoading = () => ({
  type: LOADING_POSTS_END,
  payload: null,
});

const updatePosts = posts => ({
  type: UPDATE_POSTS,
  payload: posts,
});*/

// function here
export const editParkingSpot = item => ({
  type: EDIT_PARKING_SPOT,
  payload: item,
});

