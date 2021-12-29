import React from "react";
import styles from "./Comment.module.css";

function Comment({ data }) {
    return (
        <div className={styles.comment}>
            <div className={styles.user_id}>
                {data.username}({data.email})
            </div>
            <div className={styles.comment_content}>{data.comment}</div>
            <div className={styles.created_at}>{data.createdAt}</div>
            <button className={styles.comment_reply}>
                답글 {""}
                <i className="fas fa-caret-down"></i>
            </button>
            <button className={styles.comment_more}>
                <i className="fas fa-ellipsis-v"></i>
            </button>
            <div className={styles.comment_recommend}>
                <button className={styles.comment_like}>
                    <i className="far fa-thumbs-up"></i>{" "}
                    <span>{data.thumbUp}</span>
                </button>
                <button className={styles.comment_hate}>
                    <i className="far fa-thumbs-down"></i>
                    <span>{data.thumbDown}</span>
                </button>
            </div>
        </div>
    );
}

export default Comment;
