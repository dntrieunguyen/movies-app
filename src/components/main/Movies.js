import './Movies.scss';
import Card from './Card/Card';
import { requests } from '../../store/api';
import useFetch from '../../store/fetchAPI';
export default function Main() {
   const { data: ActionMovies } = useFetch(requests.fetchActionMovies);
   const { data: ComedyMovies } = useFetch(requests.fetchComedyMovies);
   const { data: Documentaries } = useFetch(requests.fetchDocumentaries);
   const { data: HorrorMovies } = useFetch(requests.fetchHorrorMovies);
   const { data: RomanceMovies } = useFetch(requests.fetchRomanceMovies);
   const { data: Originals } = useFetch(requests.fetchNetflixOriginals);
   const { data: Trending } = useFetch(requests.fetchTrending);
   const { data: TopRated } = useFetch(requests.fetchTopRated);

   Originals.type = 'Original';
   Trending.type = 'Xu hướng';
   TopRated.type = 'Xếp hạng cao';
   ActionMovies.type = 'Hành Động';
   ComedyMovies.type = 'Hài';
   HorrorMovies.type = 'Kinh dị';
   RomanceMovies.type = 'Lãng mạn';
   Documentaries.type = 'Tài liệu';
   // 1005031
   return (
      <>
         <section className="main">
            <Card data={Originals} />
            <Card data={Trending} />
            <Card data={TopRated} />
            <Card data={ActionMovies} />
            <Card data={ComedyMovies} />
            <Card data={HorrorMovies} />
            <Card data={RomanceMovies} />
            <Card data={Documentaries} />
         </section>
      </>
   );
}
