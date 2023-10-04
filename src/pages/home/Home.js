import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { requests } from '../../store/api';
import Movies from '../../components/main/Movies';
function Home() {
   return (
      <>
         <Header></Header>
         <Movies></Movies>
      </>
   );
}

export default Home;
