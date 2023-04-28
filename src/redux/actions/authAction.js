import * as authActionTypes from '../actionTypes/authActionTypes'

export const login = () => ({
    type:authActionTypes.LOGIN
})


export const logout = () => ({
    type:authActionTypes.LOGOUT
})