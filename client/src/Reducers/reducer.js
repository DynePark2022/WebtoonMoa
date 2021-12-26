import { combineReducers } from "redux";

let userState = {
    user: {
        isAdult: false,
        isAdmin: false,
        _id: "",
        username: "",
        email: "",
    },
    likes: [],
    history: [],
    favorites: [],
    hates: [],
    comments: [],
};

//Constants Folder / ActionType File
export const GET_USER = "GET_USER";
export const LOGOUT = "LOGOUT";

const reducerUser = (state = userState, action) => {
    switch (action.type) {
        case GET_USER:
            let copy = { ...state };
            copy.user.username = action.payload.username;
            return copy;
        case LOGOUT:
            let empty = { ...state };
            empty.user.username = "";
            return empty;
        default:
            return state;
    }
};

export const TAB_ONGOING = "TAB_ONGOING";
export const TAB_ADULT = "TAB_ADULT";
export const TAB_BLGL = "TAB_BLGL";
export const TAB_COMPLETED = "TAB_COMPLETED";
export const TAB_MY = "TAB_MY";
export const TAB_COMMUNITY = "TAB_COMMUNITY";
export const TAB_CLEAR = "TAB_CLEAER";

const reducerTab = (state = [], action) => {
    switch (action.type) {
        case TAB_ONGOING:
            return (state = "연재중");
        case TAB_ADULT:
            return (state = "성인");
        case TAB_BLGL:
            return (state = "BL/GL");
        case TAB_COMPLETED:
            return (state = "완결");
        case TAB_MY:
            return (state = "My");
        case TAB_COMMUNITY:
            return (state = "커뮤니티");
        case TAB_CLEAR:
            return (state = []);
        default:
            return state;
    }
};

const INCREASE_PAGE = "INCREASE_PAGE";
const DEFAULT_PAGE = "DEFAULT_PAGE";

const reducerPage = (state = 1, action) => {
    switch (action.type) {
        case INCREASE_PAGE:
            return (state = state += 1);
        case DEFAULT_PAGE:
            return (state = 1);
        default:
            return state;
    }
};

const reducers = combineReducers({ reducerUser, reducerTab, reducerPage });

export default reducers;
