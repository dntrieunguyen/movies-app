import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
   const [navbarBg, setnavbarBg] = useState(false); // state for event scroll

   // Create function handle scroll event
   const handleChangeNavbarBg = () => {
      if (window.scrollY > 100) {
         setnavbarBg(true);
      } else {
         setnavbarBg(false);
      }
   };
   //  add scroll event
   useEffect(() => {
      window.addEventListener('scroll', handleChangeNavbarBg);
      return () => {
         window.addEventListener('scroll', handleChangeNavbarBg); // cleanup scroll event listener
      };
   }, []);
   return (
      <nav className={navbarBg ? 'navbar active' : 'navbar'}>
         <div className="navbar-container">
            <h2>Movie App</h2>
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
         </div>
      </nav>
   );
}
