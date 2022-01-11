import { useEffect, useState } from "react";
import { get_data_byCategory } from "../api/index";

function useFetchByCategory(route, page, limit, category) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        get_data_byCategory(route, page, limit, category)
            .then((res) => {
                if (page === 1) {
                    const every = [...res.data.data];
                    const noDuplicate = [
                        ...new Set(every.map(JSON.stringify)),
                    ].map(JSON.parse);
                    setData(noDuplicate);
                    setLoading(false);
                } else {
                    const every = [...data, ...res.data.data];
                    const noDuplicate = [
                        ...new Set(every.map(JSON.stringify)),
                    ].map(JSON.parse);
                    setData(noDuplicate);
                    setLoading(false);
                }
            })
            .catch((e) => {
                console.log(e);
                setError(true);
            });
    }, [page, limit, category, route]);
    return { data, loading, error };
}
export default useFetchByCategory;
