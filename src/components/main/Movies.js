import React, { useEffect, useState } from 'react';
import './Movies.scss';
import Card from './Card/Card';
import { prefixImg, requests } from '../../store/api';
import useFetch from '../../store/fetchAPI';
export default function Main() {
   let ActionMovies = useFetch(requests.fetchActionMovies);
   console.log(ActionMovies);
   // console.log(ActionMovies[0].backdrop_path);
   return (
      <>
         <section className="main">
            <Card></Card>
         </section>
      </>
   );
}
