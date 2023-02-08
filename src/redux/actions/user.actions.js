import { getAuth, GoogleAuthProvider, signOut,signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import {app} from '../../firebase-init';
import { resetCart } from './product.actions';

const auth = getAuth(app);

export class userActions{
    static logInSuccessful = "[User] Log In Successful";
    static logOutSuccessful = "[User] Log Out Successful";
    static actionError = "[User] Error";
    static userInit = "[User] Loaded successfully";
}

export function logIn(){

    return (dispatch) => {
        signInWithPopup(auth,new GoogleAuthProvider()).then(data => {
            dispatch(logInSuccessful(data.user));
        }).catch(error => {
            dispatch(actionError(error));
        })
    }
}

export function userLoaded(){
    return(dispath) => {
        onAuthStateChanged(auth, (user) => {
            user ? dispath(logInSuccessful(user)) : dispath(actionError())
        })
    }
}

export function logOut(){
    return(dispatch) => {
        signOut(auth).then(() => {
            dispatch(logOutSuccessful());
            dispatch(resetCart());
        }).catch(error => {
            dispatch(actionError(error));
        })
    }
}

export function logInSuccessful(data){
    return{
        type:userActions.logInSuccessful,
        payload:data
    }
}

export function logOutSuccessful(){
    return{
        type:userActions.logOutSuccessful
    }
}

export function actionError(error){
    return{
        type:userActions.actionError,
        payload:error
    }
}
