import logo from './logo.svg';
import './App.css';
import HotelHome from './components/HotelHome';
import HotelAttractions from './components/HotelAttractions';
import HotelBook from './components/HotelBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HotelFood from './components/HotelFood';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HotelHome/>}/>
        <Route path='/attract' element={<HotelAttractions/>}/>
        <Route path='/book' element={<HotelBook/>}/>
        <Route path='/food' element={<HotelFood/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
