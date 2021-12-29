import React from "react";
import styles from "./Comment.module.css";

function Comment() {
    return (
        <div className={styles.comment}>
            <div className={styles.user_id}>nickname(id****)</div>
            <div className={styles.comment_content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                id?
            </div>
            <div className={styles.created_at}>2022-13-13 25:79</div>
            <button className={styles.comment_reply}>
                답글 <span>111</span>
            </button>
            <button className={styles.comment_more}>
                <i className="fas fa-ellipsis-v"></i>
            </button>
            <div className={styles.comment_recommend}>
                <button className={styles.comment_like}>
                    <i className="far fa-thumbs-up"></i> <span>0</span>
                </button>
                <button className={styles.comment_hate}>
                    <i className="far fa-thumbs-down"></i>
                    <span>1</span>
                </button>
            </div>
        </div>
    );
}

export default Comment;
