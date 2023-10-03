import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
   const [navbarBg50, setnavbarBg50] = useState(false);

   const handleChangeNavbarBg = () => {
      if (window.scrollY > 100) {
         setnavbarBg50(true);
      } else {
         setnavbarBg50(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleChangeNavbarBg);
   }, []);
   return (
      <div className={navbarBg50 ? 'navbar active-50' : 'navbar'}>
         <div className="navbar__container">
            <h2 className="cursor-pointer">Movie App</h2>
            <FontAwesomeIcon
               className="cursor-pointer text-info text-primary"
               icon={faMagnifyingGlass}
            />
         </div>
      </div>
   );
}
