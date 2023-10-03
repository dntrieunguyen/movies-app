import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/search/Search';
import Home from './pages/home/Home';
function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/search" element={<Search />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
