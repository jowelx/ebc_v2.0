// This custom hook is used to manage more easily the Http via axios, you can use the properties isLoading while
// the state of the promise isn't resolved, in case of error you can use error to show to user the problem in the UI
// data is an object with some utils properties to manage anothers http petitions and isnt ok can be used to show
// validation problems in the UI, on another hand sendRequest is the function to realize the http petition, receive
// url, method, body and use headers to validate a JWT

import Cookies from "js-cookie"
import { useCallback, useState } from "react"

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isntOk, setIsntOk] = useState(null);
 
    const sendRequest = useCallback(
        async (url, method = 'GET', body = null) => {
            setIsLoading(true);
            setError(null);
            setData(null);

            try {
                const response = await fetch(url, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': Cookies.get('authToken') ? `Bearer ${Cookies.get('authToken')}` : null
                    }
                });

                if (!response.ok) {
                    const respuesta = await response.json()
                    setIsntOk(respuesta)
                    throw new Error('Request failed!');
                }

                const responseData = await response.json();
                setData(responseData);

            } catch (error) {
                console.error(error.message);
                setError(error.message || 'Something went wrong!');
            }
            setIsLoading(false);
        }, []
    );

    return { isLoading, error, data, sendRequest, isntOk };
}