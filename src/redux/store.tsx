import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    createRouterMiddleware,
    initialRouterState,
} from "connected-next-router";
import Router from "next/router";
import { loadState, saveState } from "../untils/storage.helper";
import RootReducer from "./reducer/root.reducer";

const routerMiddleware = createRouterMiddleware();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistedState = loadState();

const { asPath } = Router.router || {};
let initialState: any;
if (asPath) {
    initialState = {
        router: initialRouterState(asPath),
    };
}

export const store = createStore(
    RootReducer,
    { ...persistedState, ...initialState },
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware))
);

store.subscribe(() => saveState(store.getState()));
