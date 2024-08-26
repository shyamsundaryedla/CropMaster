// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Services from './components/Services';
import CropRecomendation from './components/CropRecomendation';
import DiseasePrediction from './components/DiseasePrediction';
import Store from './components/Store';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/Services/Crop-recomendation' element={<CropRecomendation></CropRecomendation>}></Route>
        <Route path='/Services/Disease-Prediction' element={<DiseasePrediction></DiseasePrediction>}></Route>
        <Route path='/Services/Store' element={<Store></Store>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>






      </Routes>
    </BrowserRouter>
  );
}

export default App;
