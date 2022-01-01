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
                title: "쌉니다 천리마마트 ",
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
                title: "쌉니다 천리마마트 ",
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
                title: "쌉니다 천리마마트 ",
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
                title: "쌉니다 천리마마트 ",
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
                title: "쌉니다 천리마마트 ",
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
                title: "쌉니다 천리마마트 ",
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
                title: "쌉니다 천리마마트 ",
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
            <div className="webtoon_detail_main">
                <div>{loading && "Loading..."}</div>
                <div>{error && "Error!!!"}</div>
                <div className="main_title">
                    <h1>{webtoon.title}</h1>
                </div>
                <div className="main_info">
                    <div className="info_wrap">
                        <div className="img_container">
                            <img src={webtoon.image} alt={webtoon.title} />
                        </div>
                        <div className="info_container">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>장르</th>
                                        <td>{webtoon.genre}</td>
                                    </tr>
                                    <tr>
                                        <th>원작</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>작가</th>
                                        <td>{webtoon.author}</td>
                                    </tr>
                                    <tr>
                                        <th>출판사</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>연재처</th>
                                        <td>{webtoon.publisher}</td>
                                    </tr>
                                    <tr>
                                        <th>연재 기간</th>
                                        <td>0000. 00. 00 ~ 0000. 00. 00</td>
                                    </tr>
                                    <tr>
                                        <th>연재 주기</th>
                                        <td>{webtoon.days}</td>
                                    </tr>
                                    <tr>
                                        <th>이용 등급</th>
                                        <td>{webtoon.age}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="buttons">
                                <a href={webtoon.url}>
                                    <button>웹툰보기</button>
                                </a>
                                <button>
                                    <i className="fas fa-bookmark"></i>
                                </button>
                                <button>
                                    <i className="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="main_synopsis">
                        <h3>줄거리</h3>
                        <div>{webtoon.synopsis}lorem</div>
                    </div>
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
            <aside className="aside">
                <div className="update">
                    <h2>업데이트</h2>
                    <li className="update_list">
                        {dummyWebtoon.recWebtoon.map((toon) => (
                            <ul>
                                <div className="update_img_container">
                                    <img src={toon.image} alt={toon.title} />
                                </div>
                                <div>{toon.title}</div>
                            </ul>
                        ))}
                    </li>
                </div>
                <hr />
                <div className="hot">
                    <h2>현재인기</h2>
                    <li className="update_list">
                        {dummyWebtoon.recWebtoon.map((toon) => (
                            <ul>
                                <div className="update_img_container">
                                    <img src={toon.image} alt={toon.title} />
                                </div>
                                <div>{toon.title}</div>
                            </ul>
                        ))}
                    </li>
                </div>
            </aside>
        </div>
    );
}

export default WebtoonDetail;
