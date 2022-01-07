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
    };

    const submitform = (e) => {
        e.preventDefault();
        navigate(`/search/${searchInput}`);
    };

    return (
        <div
            onClick={toggle}
            className={
                value
                    ? `${styles.Searchbox} ${styles.active}`
                    : `${styles.Searchbox}`
            }
        >
            <div className={styles.icon}>
                <i className="fas fa-search"></i>
            </div>
            <form
                className={styles.input}
                onClick={(e) => e.stopPropagation()}
                onSubmit={submitform}
            >
                <input
                    type="text"
                    placeholder="검색(제목, 작가)"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    onSubmit={submitform}
                />
            </form>
            <div className={styles.clear}>
                <i onClick={clearInput} className="fas fa-times"></i>
            </div>
        </div>
    );
}

export default Searchbox;
