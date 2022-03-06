import {AnyAction, combineReducers, Reducer} from "redux";
import AuthReducer from "./auth.reducer";
import ThemeReducer from "./theme.reducer";
import { routerReducer } from "connected-next-router";
import { State } from "../action.types";
import { HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
    theme: ThemeReducer,
    auth: AuthReducer,
    router: routerReducer,
})

const RootReducer: Reducer<State, AnyAction> = (state: any, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (typeof window !== "undefined" && state?.router) {
            nextState.router = state.router;
        }
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};


export default RootReducer
