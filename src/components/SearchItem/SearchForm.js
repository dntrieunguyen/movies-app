import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SearchForm.scss';

export default function SearchForm({ handeReset, inputValue, handeSearch }) {
   return (
      <>
         <div className="searchForm">
            <div className="searchForm-container ">
               <div className=" searchFormMain ">
                  <form>
                     <input type="text" ref={inputValue} />
                     <FontAwesomeIcon
                        className="search-icon"
                        icon={faMagnifyingGlass}
                     />
                  </form>
                  <div className="button-search">
                     <button onClick={handeReset}>reset</button>
                     <button onClick={handeSearch}>search</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
