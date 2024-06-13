import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import View from './components/View';
import SearchDelete from './components/SearchDelete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/SearchDelete' element={<SearchDelete/>}/>
      <Route path='/View' element={<View/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
