import { useEffect, useState } from 'react';

const useFetch = url => {
   const [data, setData] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
         } catch (error) {
            throw error;
         }
      };

      fetchData();
   }, []);
   return data.results;
};
export default useFetch;
