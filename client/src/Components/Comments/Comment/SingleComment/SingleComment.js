import React, { useState } from "react";
import { useSelector } from "react-redux";
import useToggle from "../../../../Hooks/useToggle";
import styles from "./SingleComment.module.css";
import { delete_comment, patch_comment_like } from "../../../../api";

function Comment({ comment: c }) {
    const userId = useSelector((state) => state.reducerUser._id);
    const [comment, setComment] = useState(c);
    const [showMore, toggle] = useToggle(false);

    const emailStars = "*".repeat(c?.authorEmail?.length - 3);
    const emailMasked = c?.authorEmail.substring(0, 3) + emailStars;

    const deleteComment = () => {
        window.confirm("댓글을 삭제할까요?") &&
            delete_comment(c._id)
                .then((res) => {
                    setComment(res.data);
                })
                .catch((err) => console.log(err));
    };
    const likeComment = () => {
        patch_comment_like(c._id)
            .then((res) => setComment(res.data))
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
                id={userId === comment?.authorId ? `${styles.my_comment}` : ""}
                id={
                    comment?.authorId === "5d6ede6a0ba62570afcedd3a"
                        ? `${styles.deleted_comment}`
                        : ""
                }
            >
                <div className={styles.user_id}>
                    {comment?.authorName}({emailMasked})
                </div>
                <div
                    className={styles.comment_content}
                    id={
                        comment?.authorId === "5d6ede6a0ba62570afcedd3a"
                            ? `${styles.deleted_content}`
                            : ""
                    }
                >
                    {comment?.comment}
                </div>
                <div className={styles.created_at}>{comment?.createdAt}</div>
                <button className={styles.comment_more} onClick={toggle}>
                    <i className="fas fa-ellipsis-v"></i>
                </button>
                {showMore && (
                    <div className={styles.more}>
                        {userId === comment?.authorId && (
                            <button onClick={deleteComment}>삭제하기</button>
                        )}
                        <button onClick={report}>신고하기</button>
                    </div>
                )}
                <div className={styles.comment_recommend}>
                    <button
                        onClick={likeComment}
                        className={styles.comment_like}
                        id={
                            comment?.thumbUp?.includes(userId)
                                ? `${styles.comment_liked}`
                                : ""
                        }
                    >
                        <i className="far fa-thumbs-up"></i>
                        <span>{comment?.thumbUp?.length}</span>
                    </button>
                    {/* <button className={styles.comment_hate}>
                        <i className="far fa-thumbs-down"></i>
                        <span>{comment.thumbDown}</span>
                    </button> */}
                </div>
            </div>
        )
    );
}

export default Comment;
