import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        setLoading(true);
        setError(false);
        async function fetchData() {
            try {
                const request = await axios.get(url);
                setData(request.data);
                setLoading(false);
                return request;
            } catch (error) {
                console.log(error);
                setError(true);
            }
        }
        fetchData();
    }, [url]);

    return { loading, error, data };
}

export default useFetch;
