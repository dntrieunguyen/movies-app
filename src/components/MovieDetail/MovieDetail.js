import React from 'react';
import './MovieDetail.scss';

export default function MovieDetail() {
   return (
      <section className="movie-detail">
         <div className="movie-detail-content">
            <div className="movie-detail-content__text">
               <h2>Name</h2> <hr />
               <p>Release</p>
               <p>Vote</p>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt eveniet numquam adipisci ipsa! Impedit, repudiandae
                  quas eos suscipit, at beatae tenetur, temporibus dolores
                  reiciendis praesentium ea dolor dignissimos autem magnam?
               </p>
            </div>
            <div>
               <img
                  src="https://vtv1.mediacdn.vn/zoom/640_400/2015/avengers-age-of-ultron-2015-movie-wide-1430629320067.jpg"
                  alt=""
               />
            </div>
         </div>
      </section>
   );
}
