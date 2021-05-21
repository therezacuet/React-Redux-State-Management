import { ADD_TODO, DECREMENT, DELETE_TODO, INCREMENT } from "./types";

export const incrementCounter = (data: any) => (
    {
      type: INCREMENT,
      data: data
    }
  );
  
  export const decrementCounter = (data: any) => (
    {
      type: DECREMENT,
      data: data
    }
  );
  
  export const addTodo = (data: any) => (
    {
      type: ADD_TODO,
      data: data
    }
  );

  export const deleteTodo = (data: any) => (
    {
      type: DELETE_TODO,
      data: data
    }
  );