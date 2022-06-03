import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Footer from './components/Footer'
import Home from './components/Home'
import React from 'react';

function App() {
  return (
    <div className="App" class="bg-white">
      <Navbar />
      <Header />
      
      <div className='row'>
        <div className='col-lg-3'>
          
        <Sidebar />
        </div>
        <div className='col-lg-9'>
        <Home />
        </div>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;