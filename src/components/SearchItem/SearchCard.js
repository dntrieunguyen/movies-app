import React, { useCallback, useEffect, useState } from 'react';
import { API_KEY, prefixImg } from '../../store/api';
import './SearchCard.scss';
import { createPortal } from 'react-dom';
import MovieDetail from '../MovieDetail/MovieDetail';

export default function SearchCard({ data, handleClickitem }) {
   return (
      <>
         {data &&
            data.map(item => (
               <img
                  className="w-full h-full hover:cursor-pointer hover:scale-110 hover:transition 
        hover:duration-500;"
                  key={item.id}
                  src={
                     item.poster_path
                        ? prefixImg + item.poster_path
                        : 'https://cuocsongdungnghia.com/wp-content/uploads/2018/05/loi-hinh-anh.jpg'
                  }
                  onClick={() => handleClickitem(item)}
                  alt=""
               />
            ))}
      </>
   );
}
