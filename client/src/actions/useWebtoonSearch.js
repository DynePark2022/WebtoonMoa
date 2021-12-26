import { useEffect, useState } from "react";
import * as api from "../api/index";

export default function useWebtoonSearch(page, limit, toon) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [webtoons, setWebtoons] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        api.get_webtoon_byTab(page, limit, toon)
            .then((res) => {
                if (page === 1) {
                    const every = [...res.data.data];
                    const noDuplicate = [
                        ...new Set(every.map(JSON.stringify)),
                    ].map(JSON.parse);
                    setWebtoons(noDuplicate);
                    setLoading(false);
                } else {
                    const every = [...webtoons, ...res.data.data];
                    const noDuplicate = [
                        ...new Set(every.map(JSON.stringify)),
                    ].map(JSON.parse);
                    setWebtoons(noDuplicate);
                    setLoading(false);
                }
            })
            .catch((e) => {
                console.log(e);
                setError(true);
            });
    }, [page, limit, toon]);
    return { webtoons, loading, error };
}
