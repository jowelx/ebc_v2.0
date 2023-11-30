import { useState, useCallback } from "react";
// import { headers } from "./useHttp";

const useHttpGetWithPagination = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const sendRequest = useCallback(async (url) => {
        setIsLoading(true);
        setError(null);
        try {
            let allData = [];
            let nextPageUrl = url;
            while (nextPageUrl) {
                const response = await fetch(nextPageUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': localStorage.getItem('authToken') ? `Bearer ${localStorage.getItem('authToken')}` : null
                    }
                });
                if (!response.ok) {
                    throw new Error('Request failed!');
                }
                const pageData = await response.json();
                allData.push(...pageData.results);
                nextPageUrl = pageData.next_link;
            }
            setData(allData);
        } catch (error) {
            console.log(error);
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, data, sendRequest };
};

export default useHttpGetWithPagination;
