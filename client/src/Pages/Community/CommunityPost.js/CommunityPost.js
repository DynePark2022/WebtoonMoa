import React from "react";
import styles from "./CommunityPost.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

function CommunityPost() {
    const { id } = useParams();
    const [data, loading, error] = useFetch(`http://localhost:3001/post/${id}`);
    const post = data[0];

    return (
        data && (
            <div className={styles.community_post}>
                <div>{loading && "loading"}</div>
                <div>{error && "loading"}</div>
                <h2 className={styles.post_title}>{post.title}</h2>
                <div className={styles.post_detail}>
                    <div className={styles.post_detail_left}>
                        <div className={styles.post_author}>
                            <i className="fas fa-user"></i>
                            {post.username}
                        </div>
                        <div className={styles.post_category}>
                            <i className="fas fa-tag"></i>
                            {post.category}
                        </div>
                        <div className={styles.comments_count}>
                            <i className="fas fa-comment"></i>
                            {post.commentCount}
                        </div>
                        <div className={styles.post_views}>
                            <i className="fas fa-eye"></i>
                            {post.viewCount}
                        </div>
                        <div className={styles.post_likes}>
                            <i className="fas fa-thumbs-up"></i>
                            {post.thumbUp}
                        </div>
                    </div>
                    <div className="post_detail_right">
                        <div className={styles.post_created}>
                            <i className="fas fa-clock"></i>
                            {post.createdAt}
                        </div>
                    </div>
                </div>
                <div className={styles.post_content}>
                    {/* FIXME: XSS */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                <div className={styles.post_like}>
                    <div>{post.thumbUp}</div>
                    <i className="fas fa-thumbs-up"></i>
                </div>
                <div className={styles.comments}>
                    {/* TODO: add comment feature */}
                </div>
            </div>
        )
    );
}

export default CommunityPost;
