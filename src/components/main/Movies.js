import './Movies.scss';
import Card from './Card/Card';
import { API_KEY, requests } from '../../store/api';
import useFetch from '../../store/fetchAPI';
import { createPortal } from 'react-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import { useEffect, useState } from 'react';

export default function Main() {
   // Sử dụng useFetch để lấy dữ liệu phim từ các endpoint khác nhau
   const { data: Originals } = useFetch(requests.fetchNetflixOriginals);
   const { data: Trending } = useFetch(requests.fetchTrending);
   const { data: TopRated } = useFetch(requests.fetchTopRated);
   const { data: ActionMovies } = useFetch(requests.fetchActionMovies);
   const { data: ComedyMovies } = useFetch(requests.fetchComedyMovies);
   const { data: HorrorMovies } = useFetch(requests.fetchHorrorMovies);
   const { data: RomanceMovies } = useFetch(requests.fetchRomanceMovies);
   const { data: Documentaries } = useFetch(requests.fetchDocumentaries);

   // Gán các loại phim tương ứng vào thuộc tính 'type' của dữ liệu
   Originals.type = 'Original';
   Trending.type = 'Xu hướng';
   TopRated.type = 'Xếp hạng cao';
   ActionMovies.type = 'Hành Động';
   ComedyMovies.type = 'Hài';
   HorrorMovies.type = 'Kinh dị';
   RomanceMovies.type = 'Lãng mạn';
   Documentaries.type = 'Tài liệu';

   // Các state để quản lý việc hiển thị chi tiết phim
   const [showDetail, setShowDetail] = useState(false);
   const [movie, setMovie] = useState([]);
   const [video, setVideo] = useState([]);
   const [detailInfo, setDetailInfo] = useState({});

   // Xử lý khi người dùng click vào một phim
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

   // Sử dụng useEffect để gọi API và lấy video của phim khi movie thay đổi
   useEffect(() => {
      // Kiểm tra nếu có phim được chọn
      if (movie.length > 0) {
         // Hàm fetchVideos để gọi API và lấy danh sách video của phim
         const fetchVideos = async () => {
            try {
               const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${movie[0].id}/videos?api_key=${API_KEY}`,
               );
               const data = await response.json();
               // Cập nhật state video với danh sách video trả về từ API
               setVideo(data.results);
            } catch (error) {
               // Xử lý lỗi nếu không thể lấy được video
               setVideo([]);
            }
         };

         // Gọi hàm fetchVideos để lấy video của phim
         fetchVideos();
      } else {
         // Nếu không có phim được chọn, reset state video về trạng thái rỗng
         setVideo([]);
      }
   }, [movie]);

   // Sử dụng useEffect để xử lý việc hiển thị chi tiết phim và video tương ứng
   useEffect(() => {
      // Kiểm tra và cập nhật video
      const checkVideo = video ? (video.length !== 0 ? video : movie) : movie;
      if (checkVideo !== video) {
         // Cập nhật state video với danh sách video hoặc phim nếu không có video
         setVideo(checkVideo);
      }

      // Xác định thông tin chi tiết của phim
      if (video) {
         // Kiểm tra số lượng video
         video.length === 1
            ? // Nếu có một video, kiểm tra backdrop_path của video đó
              video[0].backdrop_path
               ? // Nếu có backdrop_path, sử dụng video[0] làm thông tin chi tiết
                 setDetailInfo(video[0])
               : // Nếu không có backdrop_path, tìm video có site là 'YouTube' và type là 'Trailer' để sử dụng làm thông tin chi tiết
                 setDetailInfo(
                    video.find(
                       item =>
                          item.site === 'YouTube' && item.type === 'Trailer',
                    ),
                 )
            : // Nếu có nhiều video, tìm video có site là 'YouTube' và type là 'Trailer' để sử dụng làm thông tin chi tiết
              setDetailInfo(
                 video.find(
                    item => item.site === 'YouTube' && item.type === 'Trailer',
                 ),
              );
         if (video.length === 0) {
            // Nếu không có video, sử dụng thông tin phim đầu tiên trong danh sách
            setDetailInfo(movie[0]);
         }
      }
   }, [video, movie]);

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
