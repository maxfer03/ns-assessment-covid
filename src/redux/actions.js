import axios from 'axios'
import { APILINK } from '../utils/links'

export const LOGIN_USER = "LOGIN_USER"
export const REGISTER_USER = "REGISTER_USER"

export const logInUser = (userInfo) => {
    return (dispatch) => {
        axios.post(`${APILINK}/auth/login`, userInfo)
        .then(res => {
            localStorage.setItem("token", res.data.token.token)
            dispatch({type: LOGIN_USER, payload: userInfo.username})
        })
    }
}

export const registerUser = (userInfo) => {
    console.log("action")
    return (dispatch) => {
        console.log("dispatch")
        axios.post(`${APILINK}/auth/signup`, userInfo)
        .then(res => {
            localStorage.setItem("token", res.data.token.token)
            dispatch({type: LOGIN_USER, payload: userInfo.username})
        })
    }
}