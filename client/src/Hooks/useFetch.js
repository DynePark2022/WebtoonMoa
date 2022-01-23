import { useEffect, useState } from "react";
import { get_data } from "../api";

function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        setLoading(true);
        setError(false);
        get_data(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, [url]);

    return [data, loading, error, setData];
}

export default useFetch;
