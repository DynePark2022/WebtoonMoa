import React, { useState } from "react";
import styles from "./Comment.module.css";
import NestedComment from "./NestedComment/NestedComment";
import SingleComment from "./SingleComment";

function Comment({ comment: c }) {
    const [comment] = useState(c);
    const [showNested, setShowNested] = useState(false);
    const handleShowNested = () => {
        setShowNested(!showNested);
    };

    return (
        comment && (
            <div className={styles.comment}>
                <SingleComment
                    handleShowNested={handleShowNested}
                    comment={comment}
                />
                <button
                    onClick={handleShowNested}
                    className={styles.comment_nest}
                >
                    <span>답글</span>
                    <i className="fas fa-caret-down"></i>
                </button>
                {showNested && <NestedComment parentId={comment._id} />}
            </div>
        )
    );
}

export default Comment;
