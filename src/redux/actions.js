import axios from 'axios'
import { APILINK } from '../utils/links'

export const LOGIN_USER = "LOGIN_USER"

export const logInUser = (userInfo) => {
    return (dispatch) => {
        axios.post(`${APILINK}/auth/login`, userInfo)
        .then(res => {
            localStorage.setItem("token", res.data.token.token)
            dispatch({type: LOGIN_USER, payload: userInfo.username})
        })
    }
}