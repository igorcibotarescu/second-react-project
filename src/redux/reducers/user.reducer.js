import { userActions } from "../actions/user.actions";

const initialState = {
    user: undefined,
    error: undefined
};

function reducer(state = initialState,action){
    switch(action.type){
        case userActions.logInSuccessful:
            return {...state,user: action.payload, error: undefined}
        case userActions.logOutSuccessful:
            return {...state,user: undefined, error: undefined}
        case  userActions.actionError:
            return {...state,user: undefined, error: action.payload}
        default:
            return state;
    }
}

export default reducer;