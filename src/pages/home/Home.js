import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import { requests } from '../../store/api';
function Home() {
   return (
      <>
         <Header></Header>
         <div className="text-primary h-[1000px] container mx-auto">
            <h2 className="font-bold text-info">Action</h2>
         </div>
      </>
   );
}

export default Home;
