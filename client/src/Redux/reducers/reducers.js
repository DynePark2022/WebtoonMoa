import { combineReducers } from "redux";
import * as CON from "../constants/constants";

let userState = {
    user: {
        isAdult: false,
        isAdmin: false,
        _id: "",
        username: "",
        email: "",
    },
    bookmark: [],
};

const reducerUser = (state = userState, action) => {
    switch (action.type) {
        case CON.GET_USER:
            let copy = { ...state };
            copy.user.username = action.payload.username;
            copy.user.email = action.payload.email;
            copy.user._id = action.payload._id;
            return copy;
        case CON.LOGOUT:
            let empty = { ...state };
            empty.user.username = "";
            return empty;
        case CON.TEMP:
            let temp = { ...state };
            temp.user.username = "temp";
            temp.user.email = "temp@gmail.com";
            temp.user._id = "1";
            return temp;
        default:
            return state;
    }
};

const reducerTab = (state = [], action) => {
    switch (action.type) {
        case CON.TAB_ONGOING:
            return (state = "연재중");
        case CON.TAB_ADULT:
            return (state = "성인");
        case CON.TAB_BLGL:
            return (state = "BL/GL");
        case CON.TAB_COMPLETED:
            return (state = "완결");
        case CON.TAB_MY:
            return (state = "My");
        case CON.TAB_COMMUNITY:
            return (state = "커뮤니티");
        case CON.TAB_CLEAR:
            return (state = []);
        default:
            return state;
    }
};

const reducerPage = (state = 1, action) => {
    switch (action.type) {
        case CON.INCREASE_PAGE:
            return (state = state += 1);
        case CON.DEFAULT_PAGE:
            return (state = 1);
        default:
            return state;
    }
};

const reducers = combineReducers({ reducerUser, reducerTab, reducerPage });

export default reducers;
