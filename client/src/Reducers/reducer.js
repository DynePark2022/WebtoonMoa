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

export const GET_WEBTOON = "GET_WEBTOON";
export const LIKE_WEBTOON = "GET_WEBTOON";

const reducerWebtoon = (state = [], action) => {
    switch (action.type) {
        case GET_WEBTOON:
            // const temp = action.payload;
            const temp = [...action.payload];
            state = temp;
            return state;
        case LIKE_WEBTOON:
            return state;
        default:
            return state;
    }
};

const reducers = combineReducers({ reducerUser, reducerWebtoon });

export default reducers;
