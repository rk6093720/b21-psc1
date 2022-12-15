import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { Reducer as App } from "../Redux/App/reducer";
import { reducer as Auth} from "../Redux/Auth/reducer"

const rootReducer = combineReducers({ App, Auth})

export const store = createStore(
  rootReducer,
  
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));
