import { ADD_CALENDAR, ADD_USER } from "../actionTypes"
import { Action } from "../types"

export const userInitState = {}

const userReducer = (state=userInitState, action: Action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            }
        case ADD_CALENDAR:
            return  {
                ...state,
                calendar: action.payload
            }
        default:
            return state
    }
}

export default userReducer