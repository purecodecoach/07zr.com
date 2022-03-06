import { TTheme } from "../../types/redux/theme.type"
import { CHANGE_THEME } from "../action.types"


export const changeTheme = (theme: string) => (dispatch: any) => {
    console.log(theme)
    // dispatch({
    //     type: CHANGE_THEME,
    //     data: data
    // })
}
