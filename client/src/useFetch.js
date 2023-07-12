import { useState,useEffect } from "react";

const useFetch = (url) =>{

    
    const[data,setData]  = useState(null);

    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {

        const abortCont = new AbortController();
        console.log("use effect ran");

        setTimeout(() =>{
            fetch(url,{signal: abortCont.signal})
        .then(res => {
            return res.json();
        })
        .then((data) => {
            
            setData(data);
            setIsPending(false);
        })
        .then(error => {
            setIsPending(false);
            setError(error.message);
        });
        },100);

        
    },[url]);

    return{data,isPending};
    // return () => abortCont.abort();
}

export default useFetch;