import React from "react";
import styles from "./Platform.module.css";
import NaverLogo from "../../../Assets/Images/Naver_logo.png";
import KakaoLogo from "../../../Assets/Images/Kakao_logo.png";
import KakaopageLogo from "../../../Assets/Images/Kakaopage_logo.png";
import BufftoonLogo from "../../../Assets/Images/Bufftoon_logo.png";

function Platform({ platform }) {
    const platformArray = [
        { name: "네이버", src: NaverLogo },
        { name: "카카오", src: KakaoLogo },
        { name: "카카오페이지", src: KakaopageLogo },
        { name: "버프툰", src: BufftoonLogo },
    ];

    return (
        <div className="platform">
            {platformArray.map((companyName) =>
                platform === companyName.name ? (
                    <img
                        key={companyName.name}
                        className={styles.platformName}
                        src={companyName.src}
                        alt="logo"
                    />
                ) : null
            )}
        </div>
    );
}

export default Platform;
