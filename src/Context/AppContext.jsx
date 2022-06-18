import { createContext, useReducer } from 'react';
import useCombinedReducers from 'use-combined-reducers';

//Reducer
import {userReducer, userState} from './Reducers/User.js'

//Create Context
export const AppContext = createContext()


export const AppProvider = ({children}) =>{


    const [state, dispatch] = useCombinedReducers({
        user: useReducer(userReducer, userState),
    })

    return (
        <AppContext.Provider value={{state, dispatch}} >
            {children}
        </AppContext.Provider>
    )
}

