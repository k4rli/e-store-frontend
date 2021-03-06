import { createStore } from 'redux';
import rootReducer from '../reducers/RootReducer';
import { loadState } from "../localstorage";

export default () => createStore(rootReducer, loadState());
