import React, { useState } from "react";
import { useSelector } from "react-redux";
import useToggle from "../../../../Hooks/useToggle";
import styles from "./SingleComment.module.css";
import { delete_comment } from "../../../../api";

function Comment({ comment: c }) {
    const user = useSelector((state) => state.reducerUser);
    const [comment, setComment] = useState(c);
    const [showMore, toggle] = useToggle(false);

    const emailStars = "*".repeat(c.email.length - 3);
    const emailMasked = c.email.substring(0, 3) + emailStars;

    const deleteComment = () => {
        window.confirm("댓글을 삭제할까요?") &&
            delete_comment(c._id)
                .then((res) => {
                    console.log(res);
                    setComment(null);
                })
                .catch((err) => console.log(err));
    };

    const report = () => {
        alert("신고되었습니다.");
        toggle(false);
    };

    return (
        comment && (
            <div
                className={styles.comment}
                id={user.email === comment.email ? `${styles.my_comment}` : ""}
            >
                <div className={styles.user_id}>
                    {comment.username}({emailMasked})
                </div>
                <div className={styles.comment_content}>{comment.comment}</div>
                <div className={styles.created_at}>{comment.createdAt}</div>
                <button className={styles.comment_more} onClick={toggle}>
                    <i className="fas fa-ellipsis-v"></i>
                </button>
                {showMore && (
                    <div className={styles.more}>
                        {user.email === comment.email && (
                            <button onClick={deleteComment}>삭제하기</button>
                        )}
                        <button onClick={report}>신고하기</button>
                    </div>
                )}
                <div className={styles.comment_recommend}>
                    <button className={styles.comment_like}>
                        <i className="far fa-thumbs-up"></i>
                        <span>{comment.thumbUp}</span>
                    </button>
                    <button className={styles.comment_hate}>
                        <i className="far fa-thumbs-down"></i>
                        <span>{comment.thumbDown}</span>
                    </button>
                </div>
            </div>
        )
    );
}

export default Comment;
