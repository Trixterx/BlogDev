import { Dispatch } from 'redux'
import { AUTH, IAuthType } from '../types/authType'
import { ALERT, IAlertType } from '../types/alertType'

import { IUserLogin } from '../../utils/TypeScript'
import { postAPI } from '../../utils/FetchData'


export const login = (userLogin: IUserLogin) => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
        dispatch({ type: ALERT, payload: { loading: true } })

        const res = await postAPI('login', userLogin)

        dispatch({
            type: AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })

        dispatch({ type: ALERT, payload: { loading: false } })
    } catch (err: any) {
        console.log(err.response.data.msg)
    }

}