import { useState } from 'react';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import Header from '../../components/header/Header';
import Movies from '../../components/main/Movies';
function Home() {
   // const [showDetail, setShowDetail] = useState(false);

   // setShowDetail(true);
   return (
      <>
         <Header></Header>
         <Movies></Movies>
         {/* <div id="movie-detail">
            {showDetail && <MovieDetail></MovieDetail>}
         </div> */}
      </>
   );
}

export default Home;
