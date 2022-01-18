import { combineReducers } from "redux";
import * as CONSTANT from "../constants/constants";

let userState = {
    _id: undefined,
    username: undefined,
    email: undefined,
    bookmark: [],
};

const emptyUser = {
    _id: undefined,
    username: undefined,
    email: undefined,
    bookmark: [],
};

const reducerUser = (state = userState, action) => {
    switch (action.type) {
        case CONSTANT.GET_USER: {
            let copy = { ...state };
            copy = action.payload;
            return copy;
        }
        case CONSTANT.UPDATE_BOOKMARK: {
            let copy = { ...state };
            copy.bookmark = action.payload.bookmark;
            return copy;
        }

        case CONSTANT.LOGOUT: {
            return emptyUser;
        }
        default:
            return state;
    }
};

const reducerTab = (state = [], action) => {
    switch (action.type) {
        case CONSTANT.TAB_ONGOING:
            return (state = "연재중");
        case CONSTANT.TAB_ADULT:
            return (state = "성인");
        case CONSTANT.TAB_BLGL:
            return (state = "BL/GL");
        case CONSTANT.TAB_COMPLETED:
            return (state = "완결");
        case CONSTANT.TAB_MY:
            return (state = "My");
        case CONSTANT.TAB_COMMUNITY:
            return (state = "커뮤니티");
        case CONSTANT.TAB_CLEAR:
            return (state = []);
        default:
            return state;
    }
};

const reducers = combineReducers({ reducerUser, reducerTab });

export default reducers;
