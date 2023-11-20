import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/create' element={<Create/>}/>
        <Route path = '/edit/:id' element={<Update/>}/>
        
      </Routes>
    </BrowserRouter>

  );
}


export default App;