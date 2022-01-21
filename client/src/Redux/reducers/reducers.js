import { combineReducers } from "redux";
import * as CONSTANT from "../constants/constants";

const userState = {
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
            return userState;
        }
        default:
            return state;
    }
};

const reducerTab = (state = [], action) => {
    switch (action.type) {
        case CONSTANT.TAB_CHANGE: {
            let copy = [...state];
            copy = action.payload;
            return copy;
        }
        case CONSTANT.TAB_CLEAR:
            return (state = []);
        default:
            return state;
    }
};

const tagState = ["전체", "전체", "전체", "전체", "전체"];
const reducerTag = (state = tagState, action) => {
    switch (action.type) {
        case CONSTANT.TAG_CHANGE: {
            let copy = [...state];
            copy = action.payload;
            return copy;
        }
        case CONSTANT.TAG_CLEAR:
            return tagState;
        default:
            return state;
    }
};

const reducerPage = (state = 1, action) => {
    switch (action.type) {
        case CONSTANT.INCREASE_PAGE:
            return (state = state += 1);
        case CONSTANT.DEFAULT_PAGE:
            return (state = 1);
        default:
            return state;
    }
};

const reducers = combineReducers({
    reducerUser,
    reducerTab,
    reducerTag,
    reducerPage,
});

export default reducers;
