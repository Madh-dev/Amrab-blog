import { useEffect, useState } from "react";

const useHook = (url) => {

    const [data, setData] = useState(null);
    const [load, setLoads] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("The resource couldn't be fetch");
                    }
                    return res.json();
                })
                .then(data => {

                    setData(data);
                    setLoads(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setLoads(false);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    },
        [url]);

    return { data, load, error };

}

export default useHook;