import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';


// Component
const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Hello Redux Hooks!!! {count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
    </div>
  );
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// initial state
const initialState = {
  count: 0,
};

// store
const store = createStore(reducer, initialState);

// initialize
ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>),
document.getElementById('app'));

