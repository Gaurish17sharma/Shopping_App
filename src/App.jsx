import { useState } from 'react'
import './Styles/App.css';
import Head from './Components/Head';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';

function App() {
  const [mode,setMode] = useState("home");
   
  function setToProductMode() {
    setMode("product");
  }

  function setToHomeMode() {
    setMode("home");
  }

  function setToAboutMode() {
    setMode("about");
  }

  return (
    <>
      <Head setToProductMode={setToProductMode}
            setToHomeMode={setToHomeMode}
            setToAboutMode = {setToAboutMode}
            />

      {mode == "home" ? (
        <Home setToProductMode = {setToProductMode} />
      ) : mode == "product" ? (
        <Product />
      ) : (
        <About />
      )}
    </>

  )
}

export default App
