import React from "react";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <button className={styles.left}>
                    <i class="fas fa-chevron-left" />
                </button>
                <button className={styles.right}>
                    <i class="fas fa-chevron-right" />
                </button>
                <div className={styles.banner_image}>
                    <img
                        src="https://thumbs.dreamstime.com/z/merry-christmas-colorful-balls-banner-decoration-stars-backgroun-background-text-77218307.jpg"
                        alt="a"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
