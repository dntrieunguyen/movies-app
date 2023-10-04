import React from 'react';
import './Card.scss';

export default function Card() {
   return (
      <figure className="card">
         <h2>Action</h2>
         <div className="cardItems">
            <img
               src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg"
               alt=""
            />
         </div>
      </figure>
   );
}
