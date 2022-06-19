import { useReducer } from 'react';
import * as type from '../Types/Product'

const productState = {
    loading:false,
    user: null,
    token: null,
    error:null,
    success:null,
}

const productReducer = (state, action)=>{
    
    switch(action.type) {
        case type.GET_USER_REQUEST:
            return Object.assign({}, state, {
                loading:true,
                error: null,
                success:null,
            });
        case type.GET_USER_SUCCESS:
            return Object.assign({}, state, {
                error: null,
                success: action.success,
                user: action.user,
                token: action.token,
                loading: false,
            });
        case type.GET_USER_FAILED:
            return Object.assign({}, state, {
                error: action.error,
                success: null,
                loading: false,
            });
        case type.COUNT_MONEY:
            return Object.assign({}, state,{
                count:1000,
            })
        default:
            return state;
    }
}

export {productState, productReducer}