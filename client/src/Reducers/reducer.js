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

const reducer = (state = userState, action) => {
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

export default reducer;
