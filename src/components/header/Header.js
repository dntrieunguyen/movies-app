import React from 'react';
import Navbar from '../navbar/Navbar';
import './Header.scss';

export default function Header() {
   return (
      <header>
         <Navbar></Navbar>
         <div className="absolute w-full h-full">
            <img
               src="https://cdn.comedy.co.uk/images/library/comedies/900x450/m/man_vs_bee.jpg"
               alt=""
            />
            <div className="overlay-background"></div>
         </div>

         <div className="header-container">
            <div className="header-content">
               <h2>đây là title</h2>
               <div className="header-btn">
                  <button>Play</button>
                  <button>My List</button>
               </div>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  consectetur hic quas ipsa ex natus vero omnis mollitia vitae
                  atque? Sit voluptate laboriosam modi nobis vitae molestiae ad
                  illo amet!
               </p>
            </div>
         </div>
      </header>
   );
}
