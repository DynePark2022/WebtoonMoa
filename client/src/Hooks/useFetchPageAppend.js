import { useEffect, useState } from "react";
import { get_webtoon_byFilter } from "../api/index";

function useFetchPageAppend(route, page, limit, category) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({});

    useEffect(() => {
        setLoading(true);
        setError(false);
        get_webtoon_byFilter(route, page, limit, category)
            .then((res) => {
                if (page === 1) {
                    const every = [...res.data.data];
                    const noDuplicate = [
                        ...new Set(every.map(JSON.stringify)),
                    ].map(JSON.parse);
                    setData(noDuplicate);
                    setMeta(res.data.meta);
                    setLoading(false);
                } else {
                    const every = [...data, ...res.data.data];
                    const noDuplicate = [
                        ...new Set(every.map(JSON.stringify)),
                    ].map(JSON.parse);
                    setData(noDuplicate);
                    setMeta(res.data.meta);
                    setLoading(false);
                }
            })
            .catch((e) => {
                console.log(e);
                setError(true);
            });
    }, [page, limit, category, route]);
    return { data, loading, error, meta, setData };
}
export default useFetchPageAppend;
