import React from 'react';
import SearchCard from './SearchCard';

export default function SearchResults({ data, handleClickitem }) {
   return (
      <>
         <div className="searchResults">
            <h2>Search Results</h2>
            <div>
               <SearchCard
                  data={data}
                  handleClickitem={handleClickitem}
               ></SearchCard>
            </div>
         </div>
      </>
   );
}
