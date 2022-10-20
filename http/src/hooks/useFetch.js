import { useState, useEffect } from "react";




//4 - custom hook
export const useFetch = (url) => {
     const [data, setData] = useState(null);

     //5-refatorando Post

     const [config, setConfig] = useState(null);
     const [method, setMethod] = useState(null);
     const [callFetch, setCallFetch] = useState(false);

     //6 - loading

     const [loading, setLoading] = useState(false);

     // 7- tratando erros

     const [error, setError] = useState(null);


     useEffect(() => {

          const fetchData = async () => {

               //6 - loading
               setLoading(true)

               try {
                    const res = await fetch(url);

                    const req = await res.json();

                    setData(req);
               } catch (error) {

                    setError("Houve algum erro ao carregar o arquivo");
               }

               setLoading(false);
          };

          fetchData();

     }, [url, callFetch]);

     const httpConfig = (data, method) => {
          if (method === "POST") {
               setConfig({
                    method: "POST",
                    headers: {
                         "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
               });

               setMethod(method)

          }

     }

     useEffect(() => {
          const httpResquest = async () => {

               if (method === "POST") {
                    let fetchOption = [url, config];

                    const res = await fetch(...fetchOption);

                    const json = await res.json();

                    setCallFetch(json);
               }
          }

          httpResquest();
     }, [config, method, url]);

     return { data, httpConfig, loading, error };
};

