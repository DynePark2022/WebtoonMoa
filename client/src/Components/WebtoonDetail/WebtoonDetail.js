import React from "react";
import "./WebtoonDetail.css";
import Webtoon from "../WebtoonList/Webtoon";
import CommentList from "./CommentList";

function WebtoonDetail() {
    const webtoon = {
        title: "아비무쌍",
        toon: "ongoing",
        publisher: "Kakao",
        author: "노경찬, 이현석, 카카오웹툰 스튜디오, 인타임",
        genre: "액션/무협",
        image: "https://kr-a.kakaopagecdn.com/P/C/1395/sharing/2x/eacb00ec-9034-42cb-a533-7c7690741113.jpg",
        url: "https://webtoon.kakao.com/content/%EC%95%84%EB%B9%84%EB%AC%B4%EC%8C%8D/1395",
        days: "화",
        synopsis:
            "아비무쌍 줄거리 블라블라 줄거리 블라블라 줄거리 \n엔터침 블라블라 줄거리 블라블라 줄거리 블라블라\n줄거리 블라블라 줄거리 블라블라 줄거리 블라블라",
        age: "전체",
    };

    const dummyWebtoon = {
        webtoon: [
            {
                _id: 1,
                title: "1초",
                toon: "ongoing",
                publisher: "Naver",
                author: "시니 / 광운",
                genre: "스토리, 드라마",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/725586/thumbnail/thumbnail_IMAG06_94506834-c312-4ad9-a704-996570d0c6fc.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=725586",
                age: "전체",
                days: "금",
            },
            {
                _id: 2,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 3,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 4,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 5,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 6,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 7,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 8,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 9,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 10,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 11,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
            {
                _id: 12,
                title: "[드라마원작] 쌉니다 천리마마트 ",
                toon: "completed",
                publisher: "Naver",
                author: "김규삼",
                genre: "스토리, 개그",
                image: "https://shared-comic.pstatic.net/thumb/webtoon/697679/thumbnail/thumbnail_IMAG06_9a844df7-d7ef-4ce9-9bcd-84254976f4b6.jpg",
                url: "https://comic.naver.com/webtoon/list?titleId=697679",
                age: "전체",
                days: "완결",
            },
        ],
    };

    return (
        <div className="webtoon_detail">
            <div className="webtoon">
                <div className="img_container">
                    <img src={webtoon.image} alt={webtoon.title} />
                </div>
                <div className="webtoon_content">
                    <div className="webtoon_content_text">
                        <span className="webtoon_title">{webtoon.title}</span>
                        <span className="webtoon_author">{webtoon.author}</span>
                        <p className="webtoon_synopsis">{webtoon.synopsis}</p>
                        <span className="webtoon_genre">{webtoon.genre}</span>
                        <span className="webtoon_days">{webtoon.days}</span>
                        <span className="webtoon_age">
                            {webtoon.age} 이용가
                        </span>
                    </div>
                    <div className="buttons">
                        <button>웹툰보기</button>
                        <button>
                            <i className="far fa-bookmark"></i>
                        </button>
                        <button>
                            <i className="fas fa-bookmark"></i>
                        </button>
                        <button>
                            <i className="fas fa-heart"></i>
                        </button>
                        <button>
                            <i className="fas fa-star"></i>
                        </button>
                        <button>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                        <button>
                            <i className="fas fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </div>
            <CommentList />
            <div className="recommend">
                <h1>Recommendation</h1>
                <div className="recommend_list">
                    {dummyWebtoon.webtoon.map((webtoon) => (
                        <Webtoon key={webtoon._id} webtoon={webtoon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WebtoonDetail;
