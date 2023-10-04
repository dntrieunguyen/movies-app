import React from 'react';
import './Card.scss';
import { prefixImg } from '../../../store/api';

export default function Card({ data, title }) {
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
               />
            ))}
         </div>
      </figure>
   );
}
