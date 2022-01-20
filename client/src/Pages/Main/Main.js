import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

function Main() {
    const mainArray = [
        {
            image: "https://shared-comic.pstatic.net/thumb/webtoon/783536/thumbnail/thumbnail_IMAG04_d9593be8-d3b5-463f-a187-c08ca66ec84e.jpg",
            title: "연재웹툰",
            link: "/webtoon?category=ongoing",
        },
        {
            image: "https://img.etnews.com/photonews/2104/1408381_20210428103333_670_0001.jpg",
            title: "완결웹툰",
            link: "/webtoon?category=completed",
        },
        {
            image: "https://w.namu.la/s/9810f6e1bee8f22356a41c350c3de67fc69914740e32cd0a78743d07153847d9e1798b9d79ff895190791ca49d8f0822d7c773fde5801db11500f5ab79225c85d929de863ea88ffc6e275c42247c7374",
            title: "성인웹툰",
            link: "/webtoon?category=adult",
        },
        {
            image: "https://static8.depositphotos.com/1368414/973/i/950/depositphotos_9730733-stock-photo-community.jpg",
            title: "커뮤니티",
            link: "/community",
        },
    ];
    return (
        <div className={styles.main}>
            <div className={styles.cards}>
                {mainArray.map((card) => (
                    <Link key={card.title} to={card.link}>
                        <div className={styles.card}>
                            <div className={styles.img_container}>
                                <img src={card.image} />
                            </div>
                            <h3>{card.title}</h3>
                            <h4>바로가기</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Main;
