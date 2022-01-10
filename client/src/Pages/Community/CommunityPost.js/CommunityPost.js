import React from "react";
import styles from "./CommunityPost.module.css";

function CommunityPost() {
    return (
        <div className={styles.community_post}>
            <h2 className={styles.post_title}>글제목은 여기입니다.</h2>
            <div className={styles.post_detail}>
                <div className={styles.post_detail_left}>
                    <div className={styles.post_author}>
                        <i className="fas fa-user"></i>아이디
                    </div>
                    <div className={styles.post_category}>
                        <i className="fas fa-tag"></i>정보
                    </div>
                    <div className={styles.comments_count}>
                        <i className="fas fa-comment"></i>2
                    </div>
                    <div className={styles.post_views}>
                        <i className="fas fa-eye"></i>222
                    </div>
                    <div className={styles.post_likes}>
                        <i className="fas fa-thumbs-up"></i>5
                    </div>
                </div>
                <div className="post_detail_right">
                    <div className={styles.post_created}>
                        <i className="fas fa-clock"></i>2022-11-11 11:11
                    </div>
                </div>
            </div>
            <div className={styles.post_content}>content here</div>
            <div className={styles.post_like}>
                <div>5</div>
                <i className="fas fa-thumbs-up"></i>
            </div>
            <div className={styles.comments}>
                {/* TODO: add comment feature */}
            </div>
        </div>
    );
}

export default CommunityPost;
