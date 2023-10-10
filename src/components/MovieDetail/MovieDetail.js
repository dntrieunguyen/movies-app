import React, { useEffect, useState } from 'react';
import './MovieDetail.scss';
import { prefixImg } from '../../store/api';

export default function MovieDetail({ movie, detailInfo }) {
   const [checkBackdrop, setCheckBackdrop] = useState(true);
   const [data] = movie;
   useEffect(() => {
      if (detailInfo) {
         detailInfo.hasOwnProperty('backdrop_path')
            ? setCheckBackdrop(true)
            : setCheckBackdrop(false);
      }
   }, [detailInfo]);

   // const checkBackdrop = detailInfo['backdrop_path'];
   // useEffect(() => {
   //    console.log(detailInfo.hasOwnProperty('backdrop_path'));
   // }, [detailInfo]);
   // console.log(checkBackdrop);
   // console.log(data.l ? true : false);

   // const video_detail = useFetch(
   //    `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=${API_KEY}`,
   // );
   // console.log(video_detail);

   // const isVideo =
   //    video_detail.site === 'YouTube' &&
   //    (video_detail.type === 'Trailer'
   //       ? video_detail.type === 'Trailer'
   //       : video_detail.type === 'Teaser');

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
