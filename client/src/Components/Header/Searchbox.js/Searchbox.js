import React, { useState } from "react";
import styles from "./Searchbox.module.css";
import useToggle from "../../../Hooks/useToggle";
import { useNavigate } from "react-router-dom";

function Searchbox() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const [value, toggle] = useToggle();

    const clearInput = (e) => {
        e.stopPropagation();
        setSearchInput("");
        toggle(true);
    };

    const submitform = (e) => {
        e.preventDefault();
        navigate(`/search/${searchInput}`);
    };

    return (
        <div
            onClick={toggle}
            className={styles.searchbox}
            id={value ? `${styles.active}` : ``}
        >
            <div className={styles.icon}>
                <i className="fas fa-search"></i>
            </div>
            <form
                className={styles.input}
                onClick={clearInput}
                onSubmit={submitform}
            >
                <input
                    type="text"
                    placeholder="검색(제목, 작가)"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    onSubmit={submitform}
                    // onBlur={() => toggle(false)}
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
