import {legacy_createStore as createStore,applyMiddleware,compose} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk"


const initState = {
    isLoading:false,
    isError:false,
    products:[],
    cart:[],
    orders:[],
    currentProduct:{}
}

export const store = createStore(reducer,initState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(()=>console.log(store.getState()))