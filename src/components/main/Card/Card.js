import './Card.scss';
import { prefixImg } from '../../../store/api';

export default function Card({ data, onClick }) {
   // const onHandleClick = item => {
   //    console.log(
   //       `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${API_KEY}`,
   //    );
   // };
   return (
      <figure className="card">
         <h2>{data.type}</h2>
         <div className="cardItems">
            {data.map(item => (
               <img
                  key={item.id}
                  src={
                     data.type === 'Original'
                        ? item.poster_path
                           ? prefixImg + item.poster_path
                           : ''
                        : item.backdrop_path
                        ? prefixImg + item.backdrop_path
                        : ''
                  }
                  alt=""
                  onClick={() => onClick(item)}
               />
            ))}
         </div>
      </figure>
   );
}
