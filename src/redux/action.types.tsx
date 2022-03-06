import { RouterState } from "connected-next-router/types";
export interface State {
    auth: any;
    theme: any;
    router: RouterState;
}

export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_SIZE = "CHANGE_SIZE";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTH_LOADING = "AUTH_LOADING";