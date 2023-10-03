import React from 'react';
import Navbar from '../navbar/Navbar';

export default function Header() {
   return (
      <div className="bg-slate-200 h-[700px] relative">
         <Navbar></Navbar>
         <div className="absolute w-full h-full over-lay ">
            <img
               src="https://cdn.comedy.co.uk/images/library/comedies/900x450/m/man_vs_bee.jpg"
               alt=""
               className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
         </div>

         <div className="container mx-auto header-content">
            <div className="absolute text-center -translate-y-1/2 lg:text-left lg:w-1/3 top-1/2 header-container text-primary">
               <h2 className="font-bold uppercase mb-14 text-title">
                  đây là title
               </h2>
               <div className="flex justify-center gap-10 header-content__btn lg:justify-start">
                  <button className="px-[40px] text-info py-2 font-bold bg-[rgba(255,255,255,0.3)] hover:shadow-2xl hover:bg-error shadow-xl rounded-sm">
                     Play
                  </button>
                  <button className="px-[40px] text-info py-2 bg-[rgba(255,255,255,0.3)] hover:shadow-2xl hover:bg-error shadow-xl rounded-sm font-bold ">
                     My List
                  </button>
               </div>
               <p className="mt-5 text-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  consectetur hic quas ipsa ex natus vero omnis mollitia vitae
                  atque? Sit voluptate laboriosam modi nobis vitae molestiae ad
                  illo amet!
               </p>
            </div>
         </div>
      </div>
   );
}
