import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HoverButton.module.css";

function HoverButton() {
    const [showHover, setShowHover] = useState(false);

    const onClickHandler = () => {
        setShowHover(!showHover);
    };
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const scrollBottom = () => {
        window.scrollTo({ top: 99999, behavior: "smooth" });
    };
    const goHome = () => {};

    return (
        <div className={styles.HoverButton}>
            <div className={!showHover && `${styles.show}`}>
                <button onClick={scrollTop}>
                    <i class="fas fa-chevron-up"></i>
                </button>
                <Link to="/">
                    <button>
                        <i class="fas fa-home"></i>
                    </button>
                </Link>
                <button onClick={scrollBottom}>
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>

            <button
                className={showHover && `${styles.plus}`}
                onClick={onClickHandler}
            >
                <i class="fas fa-plus"></i>
            </button>
        </div>
    );
}

export default HoverButton;
