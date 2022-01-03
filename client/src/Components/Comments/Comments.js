import React, { useState } from "react";
import styles from "./Comments.module.css";
import Comment from "./Comment/Comment";
import CommentsForm from "./CommentsForm/CommentsForm";
import useFetch from "../../Hooks/useFetch";

function Comments({ postId }) {
    const [addComment, setAddComment] = useState([]);
    const { data, loading, error } = useFetch(
        `http://localhost:3001/comment/${postId}`
    );

    return (
        <div className={styles.comments}>
            <h3>Comments</h3>
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
            <CommentsForm
                postId={postId}
                addComment={addComment}
                setAddComment={setAddComment}
                loading={loading}
            />
            <div className={styles.comments_list}>
                {data && (
                    <>
                        {data.map((comment) => (
                            <Comment key={comment._id} comment={comment} />
                        ))}
                    </>
                )}
                {addComment && (
                    <>
                        {addComment.map((comment) => (
                            <Comment key={comment._id} comment={comment} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default Comments;
