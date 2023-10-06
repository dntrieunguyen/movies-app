import './Movies.scss';
import Card from './Card/Card';
import { requests } from '../../store/api';
import useFetch from '../../store/fetchAPI';
import { createPortal } from 'react-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import { useState } from 'react';

export default function Main() {
   const { data: Originals } = useFetch(requests.fetchNetflixOriginals);
   const { data: Trending } = useFetch(requests.fetchTrending);
   const { data: TopRated } = useFetch(requests.fetchTopRated);
   const { data: ActionMovies } = useFetch(requests.fetchActionMovies);
   const { data: ComedyMovies } = useFetch(requests.fetchComedyMovies);
   const { data: HorrorMovies } = useFetch(requests.fetchHorrorMovies);
   const { data: RomanceMovies } = useFetch(requests.fetchRomanceMovies);
   const { data: Documentaries } = useFetch(requests.fetchDocumentaries);

   Originals.type = 'Original';
   Trending.type = 'Xu hướng';
   TopRated.type = 'Xếp hạng cao';
   ActionMovies.type = 'Hành Động';
   ComedyMovies.type = 'Hài';
   HorrorMovies.type = 'Kinh dị';
   RomanceMovies.type = 'Lãng mạn';
   Documentaries.type = 'Tài liệu';
   // 1005031
   const [showDetail, setShowDetail] = useState(true);
   const [movie, setMovie] = useState([]);
   const handleClickitem = item => {
      const itemTarget = item;
      setMovie([itemTarget]);
      setShowDetail(false);
   };

   return (
      <>
         {Originals.length > 0 && (
            <section className="main">
               <Card onClick={handleClickitem} data={Originals} />
               <Card onClick={handleClickitem} data={Trending} />
               <Card onClick={handleClickitem} data={TopRated} />
               <Card onClick={handleClickitem} data={ActionMovies} />
               <Card onClick={handleClickitem} data={ComedyMovies} />
               <Card onClick={handleClickitem} data={HorrorMovies} />
               <Card onClick={handleClickitem} data={RomanceMovies} />
               <Card onClick={handleClickitem} data={Documentaries} />
            </section>
         )}
         {!showDetail &&
            createPortal(
               <MovieDetail movie={movie}></MovieDetail>,
               document.getElementById('root'),
            )}
      </>
   );
}
