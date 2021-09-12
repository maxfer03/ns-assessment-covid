export const LOGIN_USER = "LOGIN_USER"

export const logInUser = (userInfo) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER, payload: 'testing'})
    }
}