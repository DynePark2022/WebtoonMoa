import { useEffect, useState } from "react";
import * as api from "../api/index";

export default function useWebtoonSearch(page, limit) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [webtoons, setWebtoons] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        api.get_webtoon(page, limit)
            .then((res) => {
                setWebtoons((prevWebtoons) => {
                    return [...new Set([...prevWebtoons, ...res.data.data])];
                });
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setError(true);
            });
    }, [page, limit]);
    return { webtoons, loading, error };
}
