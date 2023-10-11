import { prefixImg } from '../../store/api';
import './SearchCard.scss';

export default function SearchCard({ data, handleClickitem }) {
   return (
      <>
         {data &&
            data.map(item => (
               <img
                  key={item.id}
                  src={
                     item.poster_path
                        ? prefixImg + item.poster_path
                        : 'https://cuocsongdungnghia.com/wp-content/uploads/2018/05/loi-hinh-anh.jpg'
                  }
                  onClick={() => handleClickitem(item)}
                  alt=""
               />
            ))}
      </>
   );
}
