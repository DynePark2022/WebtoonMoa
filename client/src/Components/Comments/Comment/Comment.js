import React from "react";
import useToggle from "../../../Hooks/useToggle";
import styles from "./Comment.module.css";
import NestedComment from "./NestedComment/NestedComment";
import SingleComment from "./SingleComment/SingleComment";

function Comment({ comment }) {
    const [showNested, toggle] = useToggle(false);

    return (
        <div className={styles.comment}>
            <SingleComment comment={comment} />
            <button onClick={toggle} className={styles.comment_nest}>
                <span>답글</span>
                <i className="fas fa-caret-down"></i>
            </button>
            {showNested && <NestedComment parentId={comment._id} />}
        </div>
    );
}

export default Comment;
