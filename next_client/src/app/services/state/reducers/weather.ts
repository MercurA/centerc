import { GET_WEATHER } from "../actionTypes";
import { Action } from "../types";

export const weatherInitState = {
}

const weaterReducer = (state=weatherInitState, action: Action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weatherData: action.payload
            }
        default:
            return state
    }
}

export default weaterReducer