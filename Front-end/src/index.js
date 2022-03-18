import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Pages/Home/Index';
import { Promocao } from './Pages/Promocoes/index';
import { Contato } from './Pages/Contato/index';
import { Viagens } from './Pages/Viagens/index';
import Londres from './Components/Imagens/Londres.jpg';
import Rio from './Components/Imagens/Rio.jpg';
import Pool from './Components/Imagens/pool.jpg'
import Viagem from './Components/Imagens/vanAmigo.jpg';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Comprar } from './Pages/Compra/comprar';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home imagem={Londres} imagem1={Rio} imagem2={Viagem} />}></Route>
          <Route path="/Promocoes" element={<Promocao imagem={Viagem} />}></Route>
          <Route path="/Viagens" element={<Viagens foto={Rio} pool={Pool} />}></Route>
          <Route path="/Contato" element={<Contato />}></Route>
          <Route path="/Compra" element={<Comprar/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

