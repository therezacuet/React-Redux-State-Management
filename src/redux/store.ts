import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    reducer: reducer,
    todoReducer: todoReducer

});

export type RootState = ReturnType<typeof rootReducer>

const configureStore = () => createStore(rootReducer);

export default configureStore;