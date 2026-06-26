import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Header from "./assets/Componentes/Header";
import Footer from "./assets/Componentes/Footer";
import Home from "./assets/Componentes/Home"; 
import Escocia from "./assets/Componentes/Escocia";
import Aruba from "./assets/Componentes/Aruba";
import Muralhas from "./assets/Componentes/Muralhas";
import GrandCanyon from "./assets/Componentes/GrandCanyon";


function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Escocia' element={<Escocia />} />
          <Route path='/Aruba' element={<Aruba />} />
          <Route path='/Muralhas' element={<Muralhas />} />
          <Route path='/GrandCanyon' element={<GrandCanyon />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App