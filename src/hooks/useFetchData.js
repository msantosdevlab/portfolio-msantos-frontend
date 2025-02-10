import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchData(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/proxy?endpoint=${endpoint}`);
                setData(res.data); 
            } catch (err) {
                // Verifica se o erro é de requisição ou outro tipo
                const errorMessage = err.response
                    ? err.response.data.message || err.response.statusText
                    : err.message;
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}
