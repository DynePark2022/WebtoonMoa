import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let user = { _id: "", username: "", email: "" };

function reducer(state = user, action) {
    if (action.type === "getUser") {
        let copy = { ...state };
        copy.username = action.payload.username;
        return copy;
    } else {
        return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
