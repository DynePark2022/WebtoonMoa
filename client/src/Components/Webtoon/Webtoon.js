import React from "react";
import styles from "./Webtoon.module.css";
import Platform from "./Platform/Platform";
import { Link } from "react-router-dom";

function Webtoon({ webtoon }) {
    return (
        <div className={styles.webtoon}>
            <a href={webtoon.url}>
                <img
                    className={styles.cover}
                    src={webtoon.image}
                    alt={webtoon.title}
                />
            </a>
            <Link to={`/webtoon/${webtoon._id}`}>
                <div className={styles.title}>{webtoon.title}</div>
            </Link>
            <div className={styles.tag}>
                {webtoon.platform && (
                    <Platform platform={webtoon.platform[0]} />
                )}
                <div className={styles.update}>NEW</div>
            </div>
        </div>
    );
}

export default Webtoon;
