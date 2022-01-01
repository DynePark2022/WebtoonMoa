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

    return (
        <div className={styles.HoverButton}>
            {/* ERROR = <div className={showHover && `${styles.show}`> */}
            {showHover && (
                <div className={styles.show}>
                    <button onClick={scrollTop}>
                        <i className="fas fa-chevron-up"></i>
                    </button>
                    <Link to="/">
                        <button>
                            <i className="fas fa-home"></i>
                        </button>
                    </Link>
                    <button onClick={scrollBottom}>
                        <i className="fas fa-chevron-down"></i>
                    </button>
                </div>
            )}
            <button
                className={showHover ? `${styles.plus}` : undefined}
                onClick={onClickHandler}
            >
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );
}

export default HoverButton;
