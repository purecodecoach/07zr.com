import { TAction } from "../../types/redux/action.type"
import { AUTH_LOADING, LOGIN, LOGOUT } from "../action.types";

const initialState = {
    isAuth: false,
    loading: false,
    user: {}
}

const AuthReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: action.data
            }
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                user: action.data
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        default:
            return { ...state }
    }
}

export default AuthReducer
