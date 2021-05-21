import React from 'react';
import { Todo } from '../models/Todo';
import { ADD_TODO, DECREMENT, DELETE_TODO, INCREMENT } from "./types";

const initialState = {
    counter:0,
    todoList:[]
};

const reducer = (state=initialState, action:any) =>{
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: action.data +1 }; 
            
        case DECREMENT:
            return {...state, counter: action.data -1 }; 

        case ADD_TODO:
            return {...state, todoList: [...state.todoList, action.data]};

        case DELETE_TODO:
            return {
                ...state, 
                todoList: state.todoList.filter(
                    (todo: Todo) => todo.id !== action.data.id,
                )
            }; 

        
    }
    return state;
}

export default reducer;
