import React, { useEffect, useState } from 'react';
import './MovieDetail.scss';
import { prefixImg } from '../../store/api';

export default function MovieDetail({ movie, detailInfo }) {
   // Khai báo các state sử dụng trong component
   const [checkBackdrop, setCheckBackdrop] = useState(true); // State để kiểm tra xem có backdrop hay không
   const [data] = movie; // Lấy giá trị từ prop 'movie' và gán cho biến 'data'

   // Sử dụng useEffect để theo dõi thay đổi của 'detailInfo'
   useEffect(() => {
      // Kiểm tra nếu 'detailInfo' tồn tại
      if (detailInfo) {
         // Kiểm tra xem 'detailInfo' có thuộc tính 'backdrop_path' hay không
         // Nếu có, set 'checkBackdrop' thành true, ngược lại set thành false
         detailInfo.hasOwnProperty('backdrop_path')
            ? setCheckBackdrop(true)
            : setCheckBackdrop(false);
      }
   }, [detailInfo]); // Sẽ chạy lại khi 'detailInfo' thay đổi

   // Trả về JSX để render cho component
   return (
      <section className="slide-in-bottom movie-detail">
         <div className="movie-detail-content">
            <div className="movie-detail-content__text">
               <h2>{data.title || data.name}</h2> <hr />
               <p>Release Date: {data.release_date}</p>
               <p>{data.vote_average}/10</p>
               <p>{data.overview}</p>
            </div>
            <div>
               {/* Kiểm tra 'checkBackdrop' để render nội dung phù hợp */}
               {checkBackdrop ? (
                  <img
                     src={
                        data.backdrop_path ? prefixImg + data.backdrop_path : ''
                     }
                     alt=""
                  />
               ) : (
                  <iframe
                     className="w-full h-[400px]"
                     src={`https://www.youtube.com/embed/${detailInfo.key}`}
                  ></iframe>
               )}
            </div>
         </div>
      </section>
   );
}
