import React from 'react';
import './Movies.scss';
import Card from './Card/Card';

export default function Main() {
   return (
      <>
         <section className="container p-5 mx-auto text-primary">
            <Card></Card>
         </section>
      </>
   );
}
