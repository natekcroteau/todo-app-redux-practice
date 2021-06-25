import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'


const todos = (state=[], action) => {
  switch(action.type){
    case "ADD_TODO":
      return [...state, { name: action.name, completed: false}]
    case "TOGGLE_COMPLETE":
      return state.map((todo, index) => 
        action.index === index
          ? { name: todo.name, completed: !todo.completed}
          : todo
      )
    case "SET_TODOS":
      state = action.todos
      return state
    case "DELETE_TODO":
      return state.filter( todo => todo.id !== action.id)
    default:
      return state
  }
}

const rootReducer = combineReducers({todos})
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);