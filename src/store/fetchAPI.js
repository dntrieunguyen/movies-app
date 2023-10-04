import { useEffect, useState } from 'react';

const useFetch = url => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(url);
            const responseData = await res.json();
            setData(responseData.results);
            setIsLoading(false);
         } catch (error) {
            throw error;
            setError(error);
            setIsLoading(false);
         }
      };

      fetchData();
   }, [url]);

   return {
      data,
      isLoading,
      error,
   };
};

export default useFetch;
