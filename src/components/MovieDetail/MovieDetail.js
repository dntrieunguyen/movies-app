import React, { useState } from 'react';
import './MovieDetail.scss';
import { API_KEY, prefixImg } from '../../store/api';
import useFetch from '../../store/fetchAPI';

export default function MovieDetail({ movie, movieClass }) {
   const [data] = movie;

   // const video_detail = useFetch(
   //    `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=${API_KEY}`,
   // );
   // console.log(video_detail);
   const [useVideoDetail, setUseVideoDetail] = useState(false);

   // const isVideo =
   //    video_detail.site === 'YouTube' &&
   //    (video_detail.type === 'Trailer'
   //       ? video_detail.type === 'Trailer'
   //       : video_detail.type === 'Teaser');

   return (
      <section className="slide-in-bottom movie-detail">
         <div className="movie-detail-content">
            <div className="movie-detail-content__text">
               <h2>{data.title || data.original_title || data.name}</h2> <hr />
               <p>Release Date: {data.release_date}</p>
               <p>{data.vote_average}/10</p>
               <p>{data.overview}</p>
            </div>
            <div>
               <img
                  src={data.backdrop_path ? prefixImg + data.backdrop_path : ''}
                  alt=""
               />
            </div>
         </div>
      </section>
   );
}
