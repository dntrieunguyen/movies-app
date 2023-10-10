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
   const [video, setVideo] = useState([]);
   const [detailInfo, setDetailInfo] = useState({});

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
               // console.error('Error fetching videos:', error);
               setVideo([]); // Trả về mảng rỗng nếu gọi API thất bại
            }
         };

         fetchVideos();
      } else {
         setVideo([]);
      }

      // if (!video || video.length === 0) {
      //    setVideo(movie);
      // }
   }, [movie]);

   useEffect(() => {
      const checkVideo = video ? (video.length !== 0 ? video : movie) : movie;
      if (checkVideo !== video) {
         setVideo(checkVideo);
      }

      if (video) {
         video.length === 1
            ? video[0].backdrop_path
               ? setDetailInfo(video[0])
               : setDetailInfo(
                    video.find(
                       item =>
                          item.site === 'YouTube' && item.type === 'Trailer',
                    ),
                 )
            : setDetailInfo(
                 video.find(
                    item => item.site === 'YouTube' && item.type === 'Trailer',
                 ),
              );
         if (video.length === 0) {
            setDetailInfo(movie[0]);
         }
      }
   }, [video, movie]);

   // console.log('Check Movie >>>', movie);
   // TH1: nó có video done
   // TH2: Không có video và đường link API lỗi => video = undefined done

   /* Xử lý sau khi đã có data chuẩn

   +++ Nếu detail info === movie ===> giữ nguyên định dạng
   
   +++ Nếu detail Info ===  video ===>  
   
   XỬ lý tìm video phù hợp: site === YouTube && type === Trailer/
   
   Trailer === undefine ==> type === Teaser
    
    
   */

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
                  detailInfo={detailInfo}
               ></MovieDetail>,
               document.getElementById('root'),
            )}
      </>
   );
}
