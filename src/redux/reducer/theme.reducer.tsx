import { TAction } from "../../types/redux/action.type"
import themeSettings from "../../untils/theme.settings"
import { CHANGE_THEME, CHANGE_SIZE } from "../action.types"
import sizeSettings from "../../untils/size.settings";


const initialState = {
    current: 'light',
    settings: {
        ...themeSettings.light
    },
    size: {
        width: 1920,
        settings: {
            ...sizeSettings.lg
        },
    }
}

const ThemeReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                current: action.data.current,
                settings: action.data.current === 'light' ?
                    {...themeSettings.light} :
                    {...themeSettings.light}
            }
        case CHANGE_SIZE:
            return {
                ...state,
                size: action.data
            }
        default:
            return { ...state }
    }
}

export default ThemeReducer
