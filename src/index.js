import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 2
      }
      case 'DECREMENT_COUNT':
        return {
          ...state,
          count: state.count - 1
        }
      
    default:
        return state;
  }
};

const INITIAL_STATE = {
  count: 0
}

const store = createStore(reducer, INITIAL_STATE)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  );
};

function Counter() {
  const count = useSelector(state => 
    state.count)
  const dispatch = useDispatch()

    function incrementCount() {
      dispatch({
        type: 'INCREMENT_COUNT'
      })
    }

    function decrementCount() {
      dispatch({
        type: 'DECREMENT_COUNT'
      })
    }    
  
  return (
    <>
    <h2>Counter: {count}</h2>
    <button onClick={incrementCount}>+</button>
    <button onClick={decrementCount}>-</button>


    </>
  )
}

ReactDOM.render(<App />,
document.getElementById('root')
);

