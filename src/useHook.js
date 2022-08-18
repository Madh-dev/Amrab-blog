import { useEffect, useState } from "react";

const useHook = (url) => {

    const [data, setData] = useState(null);
    const [load, setLoads] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
            .catch((err) => {
                setError(err.message);
                console.log(err.message);
                setLoads(false);
            })
    },
        [url]);

        return {data, load,error};

}

export default useHook;