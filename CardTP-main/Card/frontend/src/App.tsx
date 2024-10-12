import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductComponent } from './components/ProductComponent';
import { CartComponent } from './components/CartComponent';

function App() {

  return (
    <>
      <ProductComponent />
      <CartComponent />
    </>
  )
}

export default App;
