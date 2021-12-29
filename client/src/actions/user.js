import * as api from "../api/index";
import { GET_USER, LOGOUT } from "../Reducers/reducer";

export const signOut = () => async (dispatch) => {
    try {
        const { data } = await api.get_logout();
        console.log(data);
        dispatch({ type: LOGOUT });
    } catch (err) {
        console.log(err.message);
    }
};
export const signIn = () => async (dispatch) => {
    try {
        const { data } = await api.post_login();
        dispatch({ type: GET_USER, payload: data });
    } catch (err) {
        console.log(err.message);
    }
};
