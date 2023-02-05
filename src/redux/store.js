import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./reducers/product.reducer";

const reducer = combineReducers({
    products: productReducer
});

const store = configureStore({reducer:reducer});

export default store;