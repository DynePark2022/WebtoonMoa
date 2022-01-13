import React from "react";
import styles from "./Comments.module.css";
import Comment from "./Comment/Comment";
import CommentsForm from "./CommentsForm/CommentsForm";
import useFetch from "../../Hooks/useFetch";
import { url } from "../../api/index";

function Comments({ postId }) {
    const [comments, loading, error, setComments] = useFetch(
        `${url}/comment/${postId}`
    );

    return (
        <div className={styles.comments}>
            <h3>Comments</h3>
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error!!!"}</div>
            <CommentsForm
                comments={comments}
                setComments={setComments}
                loading={loading}
            />
            {comments && (
                <div className={styles.comments_list}>
                    {comments.map((comment) => (
                        <Comment key={comment._id} comment={comment} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Comments;
