import React from "react";
import styles from "./Publisher.module.css";
import NaverLogo from "../../Images/Naver_logo.png";
import KakaoLogo from "../../Images/Kakao_logo.png";
import KakaopageLogo from "../../Images/Kakaopage_logo.png";
import BufftoonLogo from "../../Images/Bufftoon_logo.png";

function Publisher({ publisher }) {
    return (
        <div className="publisher">
            {publisher === "Naver" ? (
                <img
                    className={styles.publisherName}
                    src={NaverLogo}
                    alt="logo"
                />
            ) : null}
            {publisher === "Kakao" ? (
                <img
                    className={styles.publisherName}
                    src={KakaoLogo}
                    alt="logo"
                />
            ) : null}
            {publisher === "Kakaopage" ? (
                <img
                    className={styles.publisherName}
                    src={KakaopageLogo}
                    alt="logo"
                />
            ) : null}
            {publisher === "Bufftoon" ? (
                <img
                    className={styles.publisherName}
                    src={BufftoonLogo}
                    alt="logo"
                />
            ) : null}
        </div>
    );
}

export default Publisher;
