import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Header.scss';
import useFetch from '../../store/fetchAPI';
import { prefixImg, requests } from '../../store/api';

export default function Header() {
   // Fetch dữ liệu của các phim gốc của Netflix bằng cách sử dụng hook tùy chỉnh useFetch
   const { data: NetflixOriginals } = useFetch(requests.fetchNetflixOriginals);

   // Định nghĩa biến trạng thái để lưu trữ dữ liệu hình nền ngẫu nhiên
   const [randomBackground, setRandomBackground] = useState();

   // Sử dụng hook useEffect để đặt một hình nền ngẫu nhiên từ NetflixOriginals
   useEffect(() => {
      // Tạo một chỉ số ngẫu nhiên trong khoảng độ dài mảng NetflixOriginals
      const randomIndex = Math.floor(
         Math.random() * NetflixOriginals.length - 1,
      );

      // Đặt hình nền ngẫu nhiên bằng cách sử dụng chỉ số đã tạo
      setRandomBackground(NetflixOriginals[randomIndex]);

      // Chỉ định NetflixOriginals là một dependency cho hiệu ứng này
   }, [NetflixOriginals]);

   return (
      <>
         <header>
            <Navbar></Navbar>
            {randomBackground && (
               <>
                  <div className="absolute w-full h-full">
                     <img
                        src={prefixImg + randomBackground.backdrop_path}
                        alt=""
                     />

                     <div className="overlay-background"></div>
                  </div>

                  <div className="header-container">
                     <div className="header-content">
                        <h2>{randomBackground.name}</h2>
                        <div className="header-btn">
                           <button>Play</button>
                           <button>My List</button>
                        </div>
                        <p>
                           {/* Hiển thị mô tả của hình nền ngẫu nhiên, hoặc "No Description" nếu nó trống */}
                           {randomBackground.overview.trim().length !== 0
                              ? randomBackground.overview
                              : 'No Description'}
                        </p>
                     </div>
                  </div>
               </>
            )}
         </header>
      </>
   );
}
