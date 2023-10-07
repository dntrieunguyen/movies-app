import './Movies.scss';
import Card from './Card/Card';
import { API_KEY, requests } from '../../store/api';
import useFetch from '../../store/fetchAPI';
import { createPortal } from 'react-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import { useEffect, useState } from 'react';

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
   const [showDetail, setShowDetail] = useState(false);
   const [movie, setMovie] = useState([]);

   const handleClickitem = item => {
      const itemTarget = item;
      setMovie([itemTarget]);
      if (movie.length > 0 && item.id === movie[0].id) {
         setShowDetail(!showDetail);
         // reset lại movie
         setMovie([]);
      } else {
         setShowDetail(true);
      }
   };

   const [video, setVideo] = useState([]);
   console.log('video >>>', Originals);
   useEffect(() => {
      if (movie.length > 0) {
         const fetchVideos = async () => {
            try {
               const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${movie[0].id}/videos?api_key=${API_KEY}`,
               );
               const data = await response.json();
               setVideo(data.results);
            } catch (error) {
               console.error('Error fetching videos:', error);
               setVideo([]); // Trả về mảng rỗng nếu gọi API thất bại
            }
         };

         fetchVideos();
      } else {
         setVideo([]);
      }
   }, [movie]);
   // console.log(video);

   // console.log(movie[0].id); https://api.themoviedb.org/3/movie/${movie[0].id}/videos?api_key=${API_KEY} 980489
   return (
      <>
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

         {showDetail &&
            movie.length > 0 &&
            createPortal(
               <MovieDetail
                  movie={movie}
                  showDetail={showDetail}
               ></MovieDetail>,
               document.getElementById('root'),
            )}
      </>
   );
}
