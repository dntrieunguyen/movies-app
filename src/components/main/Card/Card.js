import React, { useState } from 'react';
import './Card.scss';
import { API_KEY, prefixImg } from '../../../store/api';

export default function Card({ data }) {
   const onHandleClick = item => {
      console.log(
         `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${API_KEY}`,
      );
   };
   return (
      <figure className="card">
         <h2>{data.type}</h2>
         <div className="cardItems">
            {data.map(item => (
               <img
                  src={
                     data.type === 'Original'
                        ? prefixImg + item.poster_path
                        : prefixImg + item.backdrop_path
                  }
                  alt=""
                  onClick={() => onHandleClick(item)}
               />
            ))}
         </div>
      </figure>
   );
}
