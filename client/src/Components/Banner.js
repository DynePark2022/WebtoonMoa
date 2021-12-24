import React, { useEffect, useRef, useState } from "react";
import styles from "./Banner.module.css";

function Banner() {
    const [slide, setSlide] = useState(0);
    const slideRef = useRef(0);
    let timeRef = useRef("");

    const slideArray = [
        {
            url: "https://thumbs.dreamstime.com/b/christmas-banner-gingerbread-man-cookies-mulled-wine-holiday-decorations-fir-branches-festive-bokeh-lighting-dark-80838264.jpg",
            text: "웹툰모아는 비영리 웹사이트입니다. (1/4)",
        },
        {
            url: "https://thumbs.dreamstime.com/b/xmas-banner-204671559.jpg",
            text: "모든 웹툰은 공식 사이트로 연결되어 있습니다. (2/4)",
        },
        {
            url: "https://thumbs.dreamstime.com/b/christmas-holidays-banner-tree-bokeh-background-gifts-lights-wooden-floor-161932746.jpg",
            text: "광고용 칸 아닙니다. 배너는 연습삼아 만들어 봤습니다. 화살표 클릭하면 멈춥니다. (3/4)",
        },
        {
            url: "https://thumbs.dreamstime.com/z/merry-christmas-colorful-balls-banner-decoration-stars-backgroun-background-text-77218307.jpg",
            text: "메리 크리스마스 (4/4)",
        },
    ];

    useEffect(() => {
        const timeout = setInterval(() => {
            slideRef.current >= slideArray.length - 1
                ? (slideRef.current = 0)
                : (slideRef.current = slideRef.current + 1);
            timeRef.current = timeout;
            setSlide(slideRef.current);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    const slideLeft = () => {
        slide <= 0 ? setSlide(slideArray.length - 1) : setSlide(slide - 1);
        clearTimeout(timeRef.current);
    };
    const slideRight = () => {
        slide >= slideArray.length - 1 ? setSlide(0) : setSlide(slide + 1);
        clearTimeout(timeRef.current);
    };

    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <button onClick={slideLeft} className={styles.left}>
                    <i className="fas fa-chevron-left" />
                </button>
                <button onClick={slideRight} className={styles.right}>
                    <i className="fas fa-chevron-right" />
                </button>
                <div
                    className={styles.everySlides}
                    style={{ transform: `translateX(-${slide}00%)` }}
                >
                    {slideArray.map((slide) => (
                        <div key={slide.url} className={styles.slide}>
                            <img src={slide.url} alt="a" />
                            <div className={styles.slide_text}>
                                {slide.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;
