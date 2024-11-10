import userReducer, { userInitState } from "./reducers/user";
import weaterReducer, { weatherInitState } from "./reducers/weather";
import { Action } from "./types";

export const initialState = {
    user: userInitState,
    wather: weatherInitState
}

function reducer (state=initialState, action: Action) {
    state = {
        ...state,
        ...weaterReducer(state.wather, action),
        user: userReducer(state.user, action),
    }

    switch(action.type) {
        default:
            return state
    }
}


export default reducer