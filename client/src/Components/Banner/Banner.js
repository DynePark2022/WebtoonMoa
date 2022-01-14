import React, { useEffect, useRef, useState } from "react";
import styles from "./Banner.module.css";
import { BannerArray } from "../../DB/text";

function Banner() {
    const [slide, setSlide] = useState(0);
    const slideRef = useRef(0);
    const timeRef = useRef("");

    useEffect(() => {
        const timeout = setInterval(() => {
            slideRef.current >= BannerArray.length - 1
                ? (slideRef.current = 0)
                : (slideRef.current = slideRef.current + 1);
            timeRef.current = timeout;
            setSlide(slideRef.current);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    const slideLeft = () => {
        slide <= 0 ? setSlide(BannerArray.length - 1) : setSlide(slide - 1);
        clearTimeout(timeRef.current);
    };
    const slideRight = () => {
        slide >= BannerArray.length - 1 ? setSlide(0) : setSlide(slide + 1);
        clearTimeout(timeRef.current);
    };

    console.log(slide);

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
                    {BannerArray.map((slide) => (
                        <div key={slide.url} className={styles.slide}>
                            <img src={slide.url} alt="a" />
                            <div className={styles.slide_text}>
                                {slide.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.progress}>
                    {BannerArray.map((item, index) => (
                        <div
                            key={item.url}
                            className={styles.progress_dot}
                            id={
                                slide === index
                                    ? `${styles.active_dot}`
                                    : undefined
                            }
                            onClick={() => setSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;
