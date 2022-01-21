import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Searchbox.module.css";
import useToggle from "../../../Hooks/useToggle";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGE } from "../../../Redux/constants/constants";

function Searchbox() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const [value, toggle] = useToggle();

    const clearInput = (e) => {
        e.stopPropagation();
        setSearchInput("");
    };

    const submitForm = (e) => {
        e.preventDefault();
        dispatch({ type: DEFAULT_PAGE });
        navigate(`/search/${searchInput}`);
    };

    const openForm = (e) => {
        e.stopPropagation();
        toggle();
    };

    return (
        <div className={styles.searchbox} id={value ? `${styles.active}` : ``}>
            <div onClick={openForm} className={styles.icon}>
                <i className="fas fa-search"></i>
            </div>
            <form className={styles.input} onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="검색(제목, 작가)"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    onSubmit={submitForm}
                    disabled={value ? false : true}
                />
            </form>
            <div className={styles.clear} onClick={clearInput}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    );
}

export default Searchbox;
