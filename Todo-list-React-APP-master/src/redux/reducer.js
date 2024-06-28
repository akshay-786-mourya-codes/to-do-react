// reducers.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
} from './actionTypes';

const initialState = { 
  todos: [], 
  filter: 'ALL' 
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, { text: action.payload.text, completed: false }],
        filter: state.filter,
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
        filter: state.filter,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
      };

    case FILTER_TODOS:
      return {
        todos: state.todos,
        filter: action.payload.filter,
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
      };

    default:
      return state;
  }
};

export default todoReducer;
