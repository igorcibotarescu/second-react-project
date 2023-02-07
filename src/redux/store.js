import { applyMiddleware, combineReducers,createStore } from "redux";
//import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import productReducer from "./reducers/product.reducer";
import userReducer from "./reducers/user.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducer = combineReducers({
    products: productReducer,
    userState: userReducer
});

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)));

export default store;