import * as api from "../api/index";
import { GET_WEBTOON } from "../Reducers/reducer";

export const getWebtoon = () => async (dispatch) => {
    try {
        const { data } = await api.get_webtoon();
        dispatch({ type: GET_WEBTOON, payload: data });
    } catch (err) {
        console.log(err.message);
    }
};
