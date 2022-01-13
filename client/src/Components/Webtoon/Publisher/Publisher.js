import React from "react";
import styles from "./Publisher.module.css";
import NaverLogo from "../../../Assets/Images/Naver_logo.png";
import KakaoLogo from "../../../Assets/Images/Kakao_logo.png";
import KakaopageLogo from "../../../Assets/Images/Kakaopage_logo.png";
import BufftoonLogo from "../../../Assets/Images/Bufftoon_logo.png";

function Publisher({ publisher }) {
    const publisherArray = [
        { name: "Naver", src: NaverLogo },
        { name: "Kakao", src: KakaoLogo },
        { name: "Kakaopage", src: KakaopageLogo },
        { name: "Bufftoon", src: BufftoonLogo },
    ];

    return (
        <div className="publisher">
            {publisherArray.map((companyName) =>
                publisher === companyName.name ? (
                    <img
                        key={companyName.name}
                        className={styles.publisherName}
                        src={companyName.src}
                        alt="logo"
                    />
                ) : null
            )}
        </div>
    );
}

export default Publisher;
