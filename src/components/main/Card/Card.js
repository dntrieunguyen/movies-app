import './Card.scss';
import { prefixImg } from '../../../store/api';

export default function Card({ data, onClick }) {
   return (
      <figure className="card">
         {/* Hiển thị loại dữ liệu */}
         {data.type && <h2>{data.type}</h2>}
         <div className="cardItems">
            {/* Lặp qua danh sách dữ liệu */}
            {data.map(item => (
               <img
                  key={item.id}
                  src={
                     // Kiểm tra loại dữ liệu để xác định đường dẫn hình ảnh
                     data.type === 'Original'
                        ? item.poster_path
                           ? prefixImg + item.poster_path
                           : '' // Nếu không có đường dẫn hình ảnh, truyền chuỗi rỗng (không hiển thị hình ảnh)
                        : item.backdrop_path
                        ? prefixImg + item.backdrop_path
                        : '' // Nếu không có đường dẫn hình ảnh, truyền chuỗi rỗng (không hiển thị hình ảnh)
                  }
                  alt=""
                  onClick={() => onClick(item)}
               />
            ))}
         </div>
      </figure>
   );
}
