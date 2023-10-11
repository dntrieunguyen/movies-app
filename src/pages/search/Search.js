import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { API_KEY } from '../../store/api';
import { createPortal } from 'react-dom';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import './Search.scss';
import SearchForm from '../../components/SearchItem/SearchForm';
import SearchResults from '../../components/SearchItem/SearchResults';

const Search = () => {
   const [query, setQuery] = useState('');
   const [dataQuery, setDataQuery] = useState([]);
   const inputValue = useRef('');

   // Các state để quản lý việc hiển thị chi tiết phim
   const [showDetail, setShowDetail] = useState(false);
   const [movie, setMovie] = useState([]);
   const [video, setVideo] = useState([]);
   const [detailInfo, setDetailInfo] = useState({});

   useEffect(() => {
      const fetchVideos = async () => {
         try {
            const response = await fetch(
               `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
            );
            const data = await response.json();
            // Cập nhật state với danh sách video trả về từ API
            setDataQuery(data.results);
         } catch (error) {
            // Xử lý lỗi nếu không thể lấy được video
            setDataQuery([]);
         }
      };

      // Gọi hàm fetchVideos để lấy video của phim
      fetchVideos();
   }, [query]);

   const handeSearch = () => {
      setQuery(inputValue.current.value);
      inputValue.current.value = '';
      inputValue.current.focus();
   };

   const handeReset = () => {
      setQuery('');
      setShowDetail(false);
   };

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
         <Navbar></Navbar>
         <div className="search-main">
            <SearchForm
               handeReset={handeReset}
               inputValue={inputValue}
               handeSearch={handeSearch}
            ></SearchForm>

            <SearchResults
               data={dataQuery}
               handleClickitem={handleClickitem}
            ></SearchResults>
         </div>
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
};

export default Search;
