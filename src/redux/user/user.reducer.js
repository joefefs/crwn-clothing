import { UserActionTypes } from "./user.types"
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = ( state = INITIAL_STATE, action) => { //if there's no value for state, it will set to currentUser: null
    switch(action.type){ //
        case UserActionTypes.SET_CURRENT_USER :  //if the case is this one, then do this.... 
        //It has to match by type (if that's the case, return the object with currentUser modified)
            return {
                ...state,
                currentUser: action.payload
            }
        default : //if it isn't the case above, return state as is...
          return state

    }
}

export default userReducer;