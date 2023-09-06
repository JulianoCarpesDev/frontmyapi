import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './Products';
import Clients from './Clients';
import Budget from './Budget';
import Header from './components/header';




function App() {

  
  return (
    
    <Router>
  <Header/>

    <Routes>
      
      <Route path="/products" element={<Products />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/budget" element={<Budget />} />
    </Routes>
  
</Router>

  );
}

export default App;
