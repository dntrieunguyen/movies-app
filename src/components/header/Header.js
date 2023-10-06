import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import useFetch from '../../store/fetchAPI';
import { prefixImg, requests } from '../../store/api';

export default function Header() {
   const { data: NetflixOriginals } = useFetch(requests.fetchNetflixOriginals);
   const [randomBackground, setRandomBackground] = useState();
   useEffect(() => {
      setRandomBackground(
         NetflixOriginals[
            Math.floor(Math.random() * NetflixOriginals.length - 1)
         ],
      );
   }, [NetflixOriginals]);

   return (
      <>
         <header>
            <Navbar></Navbar>
            {randomBackground && (
               <>
                  <div className="absolute w-full h-full">
                     <img
                        src={prefixImg + randomBackground.backdrop_path}
                        alt=""
                     />

                     <div className="overlay-background"></div>
                  </div>

                  <div className="header-container">
                     <div className="header-content">
                        <h2>{randomBackground.name}</h2>
                        <div className="header-btn">
                           <button>Play</button>
                           <button>My List</button>
                        </div>
                        <p>
                           {randomBackground.overview.trim().length !== 0
                              ? randomBackground.overview
                              : 'No description'}
                        </p>
                     </div>
                  </div>
               </>
            )}
         </header>
      </>
   );
}
