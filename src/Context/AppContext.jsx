import { createContext, useReducer } from 'react';
import useCombinedReducers from 'use-combined-reducers';

//Reducer dan State
import {userReducer, userState} from './Reducers/User.js'
import {productReducer,productState} from './Reducers/Product'

//Create Context
export const AppContext = createContext()


export const AppProvider = ({children}) =>{

    const [state, dispatch] = useCombinedReducers({
        user: useReducer(userReducer, userState),
        product: useReducer(productReducer, productState)
    })

    return (
        <AppContext.Provider value={{state, dispatch}} >
            {children}
        </AppContext.Provider>
    )
}

