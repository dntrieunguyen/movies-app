import React from 'react';
import './Card.scss';

export default function Card() {
   return (
      <>
         <h2 className="font-bold text-info">Action</h2>
         <div className="flex gap-4 my-5 overflow-x-auto overflow-y-hidden scrollbar">
            <img
               src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg"
               alt=""
               className="cursor-pointer object-cover h-400px w-[200px] hover:scale-105 hover:transition hover:duration-700"
            />
         </div>
      </>
   );
}
