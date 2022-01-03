import React from "react";
import "./WebtoonDetail.css";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Webtoon from "../../Components/Webtoon/Webtoon";
import Comments from "../../Components/Comments/Comments";
import { RecWebtoonArray } from "../../DB/text";

function WebtoonDetail() {
    const url = "http://localhost:3001/";
    const { id } = useParams();
    const { data, error, loading } = useFetch(`${url}webtoon/${id}`);
    const webtoon = data;

    return (
        <div className="webtoon_detail">
            <div className="top">
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
                </div>
                <aside className="aside">
                    <div className="update">
                        <h2>최신 업데이트</h2>
                        <li className="update_list">
                            {RecWebtoonArray.map((toon) => (
                                <ul key={toon._id}>
                                    <div className="update_img_container">
                                        <img
                                            src={toon.image}
                                            alt={toon.title}
                                        />
                                    </div>
                                    <div className="update_title">
                                        {toon.title}
                                    </div>
                                </ul>
                            ))}
                        </li>
                    </div>
                </aside>
            </div>
            <div className="bottom">
                <Comments postId={data._id} />
                <div className="recommend">
                    <h1>Recommendation</h1>
                    <div className="recommend_list">
                        {RecWebtoonArray.map((toon) => (
                            <Webtoon key={toon._id} webtoon={toon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebtoonDetail;
