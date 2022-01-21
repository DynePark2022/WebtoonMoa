import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import { MainArray, MainQnAArray } from "../../DB/text";

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.cards}>
                {MainArray.map((card) => (
                    <Link key={card.title} to={card.link}>
                        <div className={styles.card}>
                            <div className={styles.img_container}>
                                <img src={card.image} alt={card.title} />
                            </div>
                            <h3>{card.title}</h3>
                            <h4>바로가기</h4>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.qna}>
                <h2>자주 묻는 질문</h2>
                {MainQnAArray.map((QnA) => (
                    <details key={QnA.question}>
                        <summary>{QnA.question}</summary>
                        <div>{QnA.answer}</div>
                    </details>
                ))}
            </div>
        </div>
    );
}

export default Main;
