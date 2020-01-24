import React, {useReducer, createContext} from "react";
import authReducer from '../reducers/authReducer';
export  const AuthContext = createContext();
export default function AuthProvider(props) {
    const user = {
    name: 'Youseff',
}
    const [ auth, dispatch ] = useReducer(authReducer, user);
    return (
       <AuthContext.Provider value={{auth, dispatch}}>
           {props.children}
       </AuthContext.Provider>
    )
}