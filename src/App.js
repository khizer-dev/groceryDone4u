import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './assets/css/custom.css'
import { Button } from 'reactstrap';
import DashBoard from './components/homepage/Homepage'; 



function App() {
  return (
    <div className="App">
   <Header/>
   <DashBoard/>
   <Footer/>

    </div>
  );
}

export default App;
