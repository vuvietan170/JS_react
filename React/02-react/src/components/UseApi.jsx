import React,{useState, useEffect} from "react";

const cache = {}; //object toan cuc
export function useApi(url){
    const [data,setData] = useState(cache[url] || null);
    const [loading,setLoading] = useState(!cache[url]); // neu co roi thi khong can loading nua
    const [error,setError] = useState(null);

    useEffect(()=> {
        if(cache[url]) return; // khong fetch nua

        async function fetchData(){
            try{
                setLoading(true);

                const response = await fetch(url);
                
                if(!response.ok){
                    throw new Error("Request Failed");
                }

                const result = await response.json(); //Doc Json: chuyen du lieu json thanh obj hoac array de co the su dung duoc

                cache[url] = result // luu cache
                setData(result);
            } catch(error){
                setError(error.message);
            } finally {
                setLoading(false);
            }
            
        }
        fetchData();// thuc thi ham vua tao

    },[url]);
    return {
        data,
        loading,
        error,
    };
}