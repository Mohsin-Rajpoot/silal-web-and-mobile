import * as actions from './actions';
const init = {
  loading: false,
  error: '',
};

export default (state = init, action) => {
  switch (action.type) {
    case actions.SET_LOADING: {
      return {...state, loading: true, error: ''};
    }
    default:
      return state;
  }
};
