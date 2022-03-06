import { signupApi } from "../../api/auth/signup";
import { AUTH_LOADING, LOGIN } from "../action.types";
import { loginApi } from "../../api/auth/login";
import { TUser } from "../../types/auth/index.type";
import { toast } from "react-toastify";
import { push } from "connected-next-router";
import { saveToken } from "../../untils/storage.helper";

const loginAction = (user: TUser) => (dispatch: any) => {
    dispatch({
        type: AUTH_LOADING,
        data: true
    })
    loginApi(user)
        .then((res: any) => {
            saveToken(res.accessToken);
            document.cookie = "accessToken=" + res.accessToken;
            dispatch({
                type: LOGIN,
                data: res.user
            })
            toast.success('Successfully login!');
            dispatch(push("/admin"))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            return dispatch({
                type: AUTH_LOADING,
                data: false
            })
        })
};

const signupAction = (user: TUser) => (dispatch: any) => {
    dispatch({
        type: AUTH_LOADING,
        data: true
    })
    signupApi(user)
        .then((res: any) => {
            if(!!res){
                saveToken(res.accessToken);
                document.cookie = "accessToken=" + res.accessToken;
                dispatch({
                    type: LOGIN,
                    data: res.user
                })
                toast.success('Successfully registered');
                dispatch(push("/admin"))
            } else {
                loginAction(user)
            }
        })
        .catch((err) => {
            console.log(err);
            toast.error('Sign up failed! Please try with another email.');
        })
        .finally(()=>{
            return dispatch({
                type: AUTH_LOADING,
                data: false
            })
        })
};

const logoutAction = () => (dispatch: any) => {

};

const updateProfileAction = (data: TUser) => (dispatch: any) => {

};


export { loginAction, signupAction, updateProfileAction };