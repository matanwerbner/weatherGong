import { handleActions } from 'redux-actions';
export default handleActions({
  INIT: (state, action) => ({
    counter: state.counter + action.payload
  })
}, {  })