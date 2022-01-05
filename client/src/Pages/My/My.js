import React from "react";
import { bookmark_webtoon } from "../../api";
import useFetch from "../../Hooks/useFetch";

function My() {
    const [data, loading, error] = useFetch(`http://localhost:3001/user`);

    const webtoonAId = `61d0e87f51f19fe86c06afab`;
    // const webtoonBId = "61c81cfb6ba14204571de9a1";

    const bookmark = () => {
        bookmark_webtoon(webtoonAId)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    console.log(data);
    return (
        <div>
            <h1>this is user page</h1>
            {loading && <div>loading</div>}
            {error && <div>error</div>}
            {data && <div>{data.username}</div>}
            <button onClick={bookmark}>북마크하기 </button>
        </div>
    );
}

export default My;
