import React from "react";
import "./WebtoonDetail.css";
import Webtoon from "../WebtoonList/Webtoon";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import useFetch from "../../actions/useFetch";

function WebtoonDetail() {
    const url = "http://localhost:3001/";
    const { id } = useParams();
    const { data, error, loading } = useFetch(`${url}webtoon/${id}`);
    const webtoon = data;
    const dummyWebtoon = {
        recWebtoon: [
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
                <div>{loading && "Loading..."}</div>
                <div>{error && "Error!!!"}</div>
            </div>
            <Comments postId={data._id} />
            <div className="recommend">
                <h1>Recommendation</h1>
                <div className="recommend_list">
                    {dummyWebtoon.recWebtoon.map((toon) => (
                        <Webtoon key={toon._id} webtoon={toon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WebtoonDetail;
